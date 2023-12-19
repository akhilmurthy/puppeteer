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
import * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

import type {
  ObservableInput,
  ObservedValueOf,
  OperatorFunction,
} from '../../third_party/rxjs/rxjs.js';
import {catchError} from '../../third_party/rxjs/rxjs.js';
import type {PuppeteerLifeCycleEvent} from '../cdp/LifecycleWatcher.js';
import {ProtocolError, TimeoutError} from '../common/Errors.js';

/**
 * @internal
 */
export type BiDiNetworkIdle = Extract<
  PuppeteerLifeCycleEvent,
  'networkidle0' | 'networkidle2'
> | null;

/**
 * @internal
 */
export function getBiDiLifeCycles(
  event: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]
): [
  Extract<PuppeteerLifeCycleEvent, 'load' | 'domcontentloaded'>,
  BiDiNetworkIdle,
] {
  if (!Array.isArray(event)) {
    event = [event];
  }

  const pageLifeCycle = event.some(lifeCycle => {
    return lifeCycle !== 'domcontentloaded';
  })
    ? 'load'
    : 'domcontentloaded';

  const networkLifeCycle = event.reduce((acc, lifeCycle) => {
    if (lifeCycle === 'networkidle0') {
      return lifeCycle;
    } else if (acc !== 'networkidle0' && lifeCycle === 'networkidle2') {
      return lifeCycle;
    }
    return acc;
  }, null as BiDiNetworkIdle);

  return [pageLifeCycle, networkLifeCycle];
}

/**
 * @internal
 */
export const lifeCycleToReadinessState = new Map<
  PuppeteerLifeCycleEvent,
  Bidi.BrowsingContext.ReadinessState
>([
  ['load', Bidi.BrowsingContext.ReadinessState.Complete],
  ['domcontentloaded', Bidi.BrowsingContext.ReadinessState.Interactive],
]);

/**
 * @internal
 */
export const lifeCycleToSubscribedEvent = new Map<
  PuppeteerLifeCycleEvent,
  'browsingContext.load' | 'browsingContext.domContentLoaded'
>([
  ['load', 'browsingContext.load'],
  ['domcontentloaded', 'browsingContext.domContentLoaded'],
]);

/**
 * @internal
 */
export function getBiDiLifecycleEvent(
  event: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]
): ['load' | 'dom', number] {
  const lifeCycles = getBiDiLifeCycles(event);
  const bidiEvent = lifeCycleToSubscribedEvent.get(lifeCycles[0])!;
  return [bidiEvent, lifeCycles[1]];
}

/**
 * @internal
 */
export function rewriteNavigationError<T, R extends ObservableInput<T>>(
  message: string,
  ms: number
): OperatorFunction<T, T | ObservedValueOf<R>> {
  return catchError<T, R>(error => {
    if (error instanceof ProtocolError) {
      error.message += ` at ${message}`;
    } else if (error instanceof TimeoutError) {
      error.message = `Navigation timeout of ${ms} ms exceeded`;
    }
    throw error;
  });
}
