/**
 * 规定了JsBridge的API
 */

import { BridgeApp } from './bridgeApp';
import { BridgeHttp } from './BridgeHttp';
import { BridgeStorage } from './bridgeStorage';

export interface StandardBridge {
  http: BridgeHttp;
  app: BridgeApp;
  storage: BridgeStorage;

  //事件监听器
  addEventListener(
    event: 'appReady' | 'appError',
    listener: (e: any) => void
  ): void;
}
