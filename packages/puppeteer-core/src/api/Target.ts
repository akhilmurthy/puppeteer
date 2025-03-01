/**
 * Copyright 2023 Google Inc. All rights reserved.
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

import type {Browser} from './Browser.js';
import type {BrowserContext} from './BrowserContext.js';
import type {CDPSession} from './CDPSession.js';
import type {Page} from './Page.js';
import type {WebWorker} from './WebWorker.js';

/**
 * @public
 */
export enum TargetType {
  PAGE = 'page',
  BACKGROUND_PAGE = 'background_page',
  SERVICE_WORKER = 'service_worker',
  SHARED_WORKER = 'shared_worker',
  BROWSER = 'browser',
  WEBVIEW = 'webview',
  OTHER = 'other',
  /**
   * @internal
   */
  TAB = 'tab',
}

/**
 * Target represents a
 * {@link https://chromedevtools.github.io/devtools-protocol/tot/Target/ | CDP target}.
 * In CDP a target is something that can be debugged such a frame, a page or a
 * worker.
 * @public
 */
export abstract class Target {
  /**
   * @internal
   */
  protected constructor() {}

  /**
   * If the target is not of type `"service_worker"` or `"shared_worker"`, returns `null`.
   */
  async worker(): Promise<WebWorker | null> {
    return null;
  }

  /**
   * If the target is not of type `"page"`, `"webview"` or `"background_page"`,
   * returns `null`.
   */
  async page(): Promise<Page | null> {
    return null;
  }

  abstract url(): string;

  /**
   * Creates a Chrome Devtools Protocol session attached to the target.
   */
  abstract createCDPSession(): Promise<CDPSession>;

  /**
   * Identifies what kind of target this is.
   *
   * @remarks
   *
   * See {@link https://developer.chrome.com/extensions/background_pages | docs} for more info about background pages.
   */
  abstract type(): TargetType;

  /**
   * Get the browser the target belongs to.
   */
  abstract browser(): Browser;

  /**
   * Get the browser context the target belongs to.
   */
  abstract browserContext(): BrowserContext;

  /**
   * Get the target that opened this target. Top-level targets return `null`.
   */
  abstract opener(): Target | undefined;
}
