/**
 * Copyright 2022 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Readable } from 'stream';

import type * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';
import type Protocol from 'devtools-protocol';

import type { Observable, ObservableInput } from '../../third_party/rxjs/rxjs.js';
import {
  first,
  firstValueFrom,
  forkJoin,
  from,
  map,
  raceWith,
} from '../../third_party/rxjs/rxjs.js';
import type { CDPSession } from '../api/CDPSession.js';
import type { BoundingBox } from '../api/ElementHandle.js';
import { Frame, FrameEvent, type WaitForOptions } from '../api/Frame.js';
import type { HTTPResponse } from '../api/HTTPResponse.js';
import {
  Page,
  PageEvent,
  type GeolocationOptions,
  type MediaFeature,
  type NewDocumentScriptEvaluation,
  type ScreenshotOptions,
} from '../api/Page.js';
import { Accessibility } from '../cdp/Accessibility.js';
import { Coverage } from '../cdp/Coverage.js';
import { EmulationManager as CdpEmulationManager } from '../cdp/EmulationManager.js';
import { Tracing } from '../cdp/Tracing.js';
import {
  type ConsoleMessageLocation
} from '../common/ConsoleMessage.js';
import { UnsupportedOperation } from '../common/Errors.js';
import { NetworkManagerEvent } from '../common/NetworkManagerEvents.js';
import type { PDFOptions } from '../common/PDFOptions.js';
import type { Awaitable } from '../common/types.js';
import {
  evaluationString,
  NETWORK_IDLE_TIME,
  timeout,
  waitForHTTP
} from '../common/util.js';
import type { Viewport } from '../common/Viewport.js';
import { assert } from '../util/assert.js';
import { isErrorLike } from '../util/ErrorLike.js';

import { BidiCdpSession } from './BidiCdpSession.js';
import type { BidiBrowser } from './Browser.js';
import type { BidiBrowserContext } from './BrowserContext.js';
import type { BrowsingContext } from './BrowsingContext.js';
import type { BidiConnection } from './Connection.js';
import { BidiElementHandle } from './ElementHandle.js';
import { EmulationManager } from './EmulationManager.js';
import { BidiFrame } from './Frame.js';
import type { BidiHTTPRequest } from './HTTPRequest.js';
import type { BidiHTTPResponse } from './HTTPResponse.js';
import { BidiKeyboard, BidiMouse, BidiTouchscreen } from './Input.js';
import type { BidiJSHandle } from './JSHandle.js';
import type { BiDiNetworkIdle } from './lifecycle.js';
import { getBiDiReadinessState, rewriteNavigationError } from './lifecycle.js';
import { BidiNetworkManager } from './NetworkManager.js';
import { createBidiHandle } from './Realm.js';
import type { BiDiPageTarget } from './Target.js';
import { DisposableStack } from '../util/disposable.js';
import { EventSubscription } from '../common/EventEmitter.js';

/**
 * @internal
 */
export class BidiPage extends Page {
  #frame: BidiFrame;

  #accessibility: Accessibility;
  #cdpEmulationManager: CdpEmulationManager;
  #coverage: Coverage;
  #emulationManager: EmulationManager;
  #keyboard: BidiKeyboard;
  #mouse: BidiMouse;
  #touchscreen: BidiTouchscreen;
  #tracing: Tracing;

  readonly #disposables = new DisposableStack();
  #viewport: Viewport | null = null;

  constructor(context: BrowsingContext) {
    super();
    this.#frame = BidiFrame.createRootFrame(this, context, this._timeoutSettings);

    // TODO: https://github.com/w3c/webdriver-bidi/issues/443
    this.#accessibility = new Accessibility(context.cdpSession);
    this.#cdpEmulationManager = new CdpEmulationManager(context.cdpSession);
    this.#coverage = new Coverage(context.cdpSession);
    this.#emulationManager = new EmulationManager(context);
    this.#keyboard = new BidiKeyboard(this);
    this.#mouse = new BidiMouse(context);
    this.#networkManager = new BidiNetworkManager(this.#connection, this);
    this.#touchscreen = new BidiTouchscreen(context);
    this.#tracing = new Tracing(context.cdpSession);

    this.#disposables.use(
      new EventSubscription(
        this.#frame,
        FrameEvent.FrameDetached,
        (frame: Frame) => {
          if (frame !== this.#frame) {
            return;
          }
          this.#disposables.dispose();
          this.#networkManager.dispose();
          this.emit(PageEvent.Close, undefined);
          this.removeAllListeners();
        }
      )
    );

  }

  get #connection(): BidiConnection {
    return this.browser().connection;
  }

  _client(): CDPSession {
    return this.mainFrame().context().cdpSession;
  }

  override async setUserAgent(
    userAgent: string,
    userAgentMetadata?: Protocol.Emulation.UserAgentMetadata | undefined
  ): Promise<void> {
    // TODO: handle CDP-specific cases such as mprach.
    await this._client().send('Network.setUserAgentOverride', {
      userAgent: userAgent,
      userAgentMetadata: userAgentMetadata,
    });
  }

  override async setBypassCSP(enabled: boolean): Promise<void> {
    // TODO: handle CDP-specific cases such as mprach.
    await this._client().send('Page.setBypassCSP', {enabled});
  }

  override async queryObjects<Prototype>(
    prototypeHandle: BidiJSHandle<Prototype>
  ): Promise<BidiJSHandle<Prototype[]>> {
    assert(!prototypeHandle.disposed, 'Prototype JSHandle is disposed!');
    assert(
      prototypeHandle.id,
      'Prototype JSHandle must not be referencing primitive value'
    );
    const response = await this.mainFrame().client.send(
      'Runtime.queryObjects',
      {
        prototypeObjectId: prototypeHandle.id,
      }
    );
    return createBidiHandle(this.mainFrame().mainRealm(), {
      type: 'array',
      handle: response.objects.objectId,
    }) as BidiJSHandle<Prototype[]>;
  }

  override get accessibility(): Accessibility {
    return this.#accessibility;
  }

  override get tracing(): Tracing {
    return this.#tracing;
  }

  override get coverage(): Coverage {
    return this.#coverage;
  }

  override get mouse(): BidiMouse {
    return this.#mouse;
  }

  override get touchscreen(): BidiTouchscreen {
    return this.#touchscreen;
  }

  override get keyboard(): BidiKeyboard {
    return this.#keyboard;
  }

  override browser(): BidiBrowser {
    return this.browserContext().browser();
  }

  override browserContext(): BidiBrowserContext {
    return this.mainFrame().context().browserContext;
  }

  override mainFrame(): BidiFrame {
    return this.#frame;
  }

  /**
   * @internal
   */
  async focusedFrame(): Promise<BidiFrame> {
    using frame = await this.mainFrame()
      .isolatedRealm()
      .evaluateHandle(() => {
        let frame: HTMLIFrameElement | undefined;
        let win: Window | null = window;
        while (win?.document.activeElement instanceof HTMLIFrameElement) {
          frame = win.document.activeElement;
          win = frame.contentWindow;
        }
        return frame;
      });
    if (!(frame instanceof BidiElementHandle)) {
      return this.mainFrame();
    }
    return await frame.contentFrame();
  }

  override frames(): BidiFrame[] {
    return [...this.#frame.getDescendants()];
  }

  getNavigationResponse(id?: string | null): BidiHTTPResponse | null {
    return this.#networkManager.getNavigationResponse(id);
  }

  override isClosed(): boolean {
    return this.#frame.disposed;
  }

  override async close(options?: {runBeforeUnload?: boolean}): Promise<void> {
    await this.#frame.context().close(options?.runBeforeUnload ?? false);
    
  }

  override async reload(
    options: WaitForOptions = {}
  ): Promise<BidiHTTPResponse | null> {
    const {
      waitUntil = 'load',
      timeout: ms = this._timeoutSettings.navigationTimeout(),
    } = options;

    const [readiness, networkIdle] = getBiDiReadinessState(waitUntil);

    const response = await firstValueFrom(
      this._waitWithNetworkIdle(
        this.mainFrame().context();
        this.#connection.send('browsingContext.reload', {
          context: this.mainFrame()._id,
          wait: readiness,
        }),
        networkIdle
      )
        .pipe(raceWith(timeout(ms), from(this.#closedDeferred.valueOrThrow())))
        .pipe(rewriteNavigationError(this.url(), ms))
    );

    return this.getNavigationResponse(response?.result.navigation);
  }

  override setDefaultNavigationTimeout(timeout: number): void {
    this._timeoutSettings.setDefaultNavigationTimeout(timeout);
  }

  override setDefaultTimeout(timeout: number): void {
    this._timeoutSettings.setDefaultTimeout(timeout);
  }

  override getDefaultTimeout(): number {
    return this._timeoutSettings.timeout();
  }

  override isJavaScriptEnabled(): boolean {
    return this.#cdpEmulationManager.javascriptEnabled;
  }

  override async setGeolocation(options: GeolocationOptions): Promise<void> {
    return await this.#cdpEmulationManager.setGeolocation(options);
  }

  override async setJavaScriptEnabled(enabled: boolean): Promise<void> {
    return await this.#cdpEmulationManager.setJavaScriptEnabled(enabled);
  }

  override async emulateMediaType(type?: string): Promise<void> {
    return await this.#cdpEmulationManager.emulateMediaType(type);
  }

  override async emulateCPUThrottling(factor: number | null): Promise<void> {
    return await this.#cdpEmulationManager.emulateCPUThrottling(factor);
  }

  override async emulateMediaFeatures(
    features?: MediaFeature[]
  ): Promise<void> {
    return await this.#cdpEmulationManager.emulateMediaFeatures(features);
  }

  override async emulateTimezone(timezoneId?: string): Promise<void> {
    return await this.#cdpEmulationManager.emulateTimezone(timezoneId);
  }

  override async emulateIdleState(overrides?: {
    isUserActive: boolean;
    isScreenUnlocked: boolean;
  }): Promise<void> {
    return await this.#cdpEmulationManager.emulateIdleState(overrides);
  }

  override async emulateVisionDeficiency(
    type?: Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type']
  ): Promise<void> {
    return await this.#cdpEmulationManager.emulateVisionDeficiency(type);
  }

  override async setViewport(viewport: Viewport): Promise<void> {
    if (!this.browser().cdpSupported) {
      await this.#emulationManager.emulateViewport(viewport);
      this.#viewport = viewport;
      return;
    }
    const needsReload =
      await this.#cdpEmulationManager.emulateViewport(viewport);
    this.#viewport = viewport;
    if (needsReload) {
      await this.reload();
    }
  }

  override viewport(): Viewport | null {
    return this.#viewport;
  }

  override async pdf(options: PDFOptions = {}): Promise<Buffer> {
    const {path = undefined} = options;
    const {
      printBackground: background,
      margin,
      landscape,
      width,
      height,
      pageRanges: ranges,
      scale,
      preferCSSPageSize,
      timeout: ms,
    } = this._getPDFOptions(options, 'cm');
    const pageRanges = ranges ? ranges.split(', ') : [];
    const data = await firstValueFrom(
      from(
        this.mainFrame().context().print({
          background,
          margin,
          orientation: landscape ? 'landscape' : 'portrait',
          page: {
            width,
            height,
          },
          pageRanges,
          scale,
          shrinkToFit: !preferCSSPageSize,
        })
      ).pipe(raceWith(timeout(ms)))
    );

    const buffer = Buffer.from(data, 'base64');
    await this._maybeWriteBufferToFile(path, buffer);
    return buffer;
  }

  override async createPDFStream(
    options?: PDFOptions | undefined
  ): Promise<Readable> {
    const buffer = await this.pdf(options);
    try {
      const {Readable} = await import('stream');
      return Readable.from(buffer);
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error(
          'Can only pass a file path in a Node-like environment.'
        );
      }
      throw error;
    }
  }

  override async _screenshot(
    options: Readonly<ScreenshotOptions>
  ): Promise<string> {
    const {clip, type, captureBeyondViewport, quality} = options;
    if (options.omitBackground !== undefined && options.omitBackground) {
      throw new UnsupportedOperation(`BiDi does not support 'omitBackground'.`);
    }
    if (options.optimizeForSpeed !== undefined && options.optimizeForSpeed) {
      throw new UnsupportedOperation(
        `BiDi does not support 'optimizeForSpeed'.`
      );
    }
    if (options.fromSurface !== undefined && !options.fromSurface) {
      throw new UnsupportedOperation(`BiDi does not support 'fromSurface'.`);
    }
    if (clip !== undefined && clip.scale !== undefined && clip.scale !== 1) {
      throw new UnsupportedOperation(
        `BiDi does not support 'scale' in 'clip'.`
      );
    }

    let box: BoundingBox | undefined;
    if (clip) {
      if (captureBeyondViewport) {
        box = clip;
      } else {
        // The clip is always with respect to the document coordinates, so we
        // need to convert this to viewport coordinates when we aren't capturing
        // beyond the viewport.
        const [pageLeft, pageTop] = await this.evaluate(() => {
          if (!window.visualViewport) {
            throw new Error('window.visualViewport is not supported.');
          }
          return [
            window.visualViewport.pageLeft,
            window.visualViewport.pageTop,
          ] as const;
        });
        box = {
          ...clip,
          x: clip.x - pageLeft,
          y: clip.y - pageTop,
        };
      }
    }

    const {
      result: {data},
    } = await this.#connection.send('browsingContext.captureScreenshot', {
      context: this.mainFrame()._id,
      origin: captureBeyondViewport ? 'document' : 'viewport',
      format: {
        type: `image/${type}`,
        ...(quality !== undefined ? {quality: quality / 100} : {}),
      },
      ...(box ? {clip: {type: 'box', ...box}} : {}),
    });
    return data;
  }

  override async waitForRequest(
    urlOrPredicate:
      | string
      | ((req: BidiHTTPRequest) => boolean | Promise<boolean>),
    options: {timeout?: number} = {}
  ): Promise<BidiHTTPRequest> {
    const {timeout = this._timeoutSettings.timeout()} = options;
    return await waitForHTTP(
      this.#networkManager,
      NetworkManagerEvent.Request,
      urlOrPredicate,
      timeout,
      this.#closedDeferred
    );
  }

  override async waitForResponse(
    urlOrPredicate:
      | string
      | ((res: BidiHTTPResponse) => boolean | Promise<boolean>),
    options: {timeout?: number} = {}
  ): Promise<BidiHTTPResponse> {
    const {timeout = this._timeoutSettings.timeout()} = options;
    return await waitForHTTP(
      this.#networkManager,
      NetworkManagerEvent.Response,
      urlOrPredicate,
      timeout,
      this.#closedDeferred
    );
  }

  override async waitForNetworkIdle(
    options: {idleTime?: number; timeout?: number} = {}
  ): Promise<void> {
    const {
      idleTime = NETWORK_IDLE_TIME,
      timeout: ms = this._timeoutSettings.timeout(),
    } = options;

    await firstValueFrom(
      this._waitForNetworkIdle(this.#networkManager, idleTime).pipe(
        raceWith(timeout(ms), from(this.#closedDeferred.valueOrThrow()))
      )
    );
  }

  override async createCDPSession(): Promise<CDPSession> {
    const {sessionId} = await this.mainFrame()
      .context()
      .cdpSession.send('Target.attachToTarget', {
        targetId: this.mainFrame()._id,
        flatten: true,
      });
    return new BidiCdpSession(this.mainFrame().context(), sessionId);
  }

  override async bringToFront(): Promise<void> {
    await this.mainFrame().context().activate();
  }

  override async evaluateOnNewDocument<
    Params extends unknown[],
    Func extends (...args: Params) => unknown = (...args: Params) => unknown,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<NewDocumentScriptEvaluation> {
    const expression = evaluationExpression(pageFunction, ...args);
    const {result} = await this.#connection.send('script.addPreloadScript', {
      functionDeclaration: expression,
      contexts: [this.mainFrame()._id],
    });

    return {identifier: result.script};
  }

  override async removeScriptToEvaluateOnNewDocument(
    id: string
  ): Promise<void> {
    await this.#connection.send('script.removePreloadScript', {
      script: id,
    });
  }

  override async exposeFunction<Args extends unknown[], Ret>(
    name: string,
    pptrFunction:
      | ((...args: Args) => Awaitable<Ret>)
      | {default: (...args: Args) => Awaitable<Ret>}
  ): Promise<void> {
    return await this.mainFrame().exposeFunction(
      name,
      'default' in pptrFunction ? pptrFunction.default : pptrFunction
    );
  }

  override isDragInterceptionEnabled(): boolean {
    return false;
  }

  override async setCacheEnabled(enabled?: boolean): Promise<void> {
    // TODO: handle CDP-specific cases such as mprach.
    await this._client().send('Network.setCacheDisabled', {
      cacheDisabled: !enabled,
    });
  }

  override isServiceWorkerBypassed(): never {
    throw new UnsupportedOperation();
  }

  override target(): BiDiPageTarget {
    throw new UnsupportedOperation();
  }

  override waitForFileChooser(): never {
    throw new UnsupportedOperation();
  }

  override workers(): never {
    throw new UnsupportedOperation();
  }

  override setRequestInterception(): never {
    throw new UnsupportedOperation();
  }

  override setDragInterception(): never {
    throw new UnsupportedOperation();
  }

  override setBypassServiceWorker(): never {
    throw new UnsupportedOperation();
  }

  override setOfflineMode(): never {
    throw new UnsupportedOperation();
  }

  override emulateNetworkConditions(): never {
    throw new UnsupportedOperation();
  }

  override cookies(): never {
    throw new UnsupportedOperation();
  }

  override setCookie(): never {
    throw new UnsupportedOperation();
  }

  override deleteCookie(): never {
    throw new UnsupportedOperation();
  }

  override removeExposedFunction(): never {
    // TODO: Quick win?
    throw new UnsupportedOperation();
  }

  override authenticate(): never {
    throw new UnsupportedOperation();
  }

  override setExtraHTTPHeaders(): never {
    throw new UnsupportedOperation();
  }

  override metrics(): never {
    throw new UnsupportedOperation();
  }

  override async goBack(
    options: WaitForOptions = {}
  ): Promise<HTTPResponse | null> {
    return await this.#go(-1, options);
  }

  override async goForward(
    options: WaitForOptions = {}
  ): Promise<HTTPResponse | null> {
    return await this.#go(+1, options);
  }

  async #go(
    delta: number,
    options: WaitForOptions
  ): Promise<HTTPResponse | null> {
    try {
      const result = await Promise.all([
        this.waitForNavigation(options),
        this.#connection.send('browsingContext.traverseHistory', {
          delta,
          context: this.mainFrame()._id,
        }),
      ]);
      return result[0];
    } catch (err) {
      // TODO: waitForNavigation should be cancelled if an error happens.
      if (isErrorLike(err)) {
        if (err.message.includes('no such history entry')) {
          return null;
        }
      }
      throw err;
    }
  }

  override waitForDevicePrompt(): never {
    throw new UnsupportedOperation();
  }
}

function isConsoleLogEntry(
  event: Bidi.Log.Entry
): event is Bidi.Log.ConsoleLogEntry {
  return event.type === 'console';
}

function isJavaScriptLogEntry(
  event: Bidi.Log.Entry
): event is Bidi.Log.JavascriptLogEntry {
  return event.type === 'javascript';
}

function getStackTraceLocations(
  stackTrace?: Bidi.Script.StackTrace
): ConsoleMessageLocation[] {
  const stackTraceLocations: ConsoleMessageLocation[] = [];
  if (stackTrace) {
    for (const callFrame of stackTrace.callFrames) {
      stackTraceLocations.push({
        url: callFrame.url,
        lineNumber: callFrame.lineNumber,
        columnNumber: callFrame.columnNumber,
      });
    }
  }
  return stackTraceLocations;
}

function evaluationExpression(fun: Function | string, ...args: unknown[]) {
  return `() => {${evaluationString(fun, ...args)}}`;
}
