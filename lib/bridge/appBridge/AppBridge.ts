import { StandardBridge } from '../standard';
import { AppInfo, BridgeApp } from '../standard/bridgeApp';
import { BridgeHttp, HttpConfig, HttpResponse } from '../standard/BridgeHttp';
import { BridgeStorage } from '../standard/bridgeStorage';

/**
 * 实现app的jsbridge
 */
class AppHttp implements BridgeHttp {
  request(config: HttpConfig): Promise<HttpResponse> {
    //TODO: 通过jsonBridge来实现此方法
    throw new Error('Method not implemented.');
  }
  get(url: string, options?: HttpConfig | undefined): Promise<HttpResponse> {
    throw new Error('Method not implemented.');
  }
  post(
    url: string,
    data?: string | object | undefined,
    config?: HttpConfig | undefined
  ): Promise<HttpResponse> {
    throw new Error('Method not implemented.');
  }
  delete(url: string, config?: HttpConfig | undefined): Promise<HttpResponse> {
    throw new Error('Method not implemented.');
  }
  put(
    url: any,
    data?: string | object | undefined,
    config?: HttpConfig | undefined
  ): Promise<HttpResponse> {
    throw new Error('Method not implemented.');
  }
}

class App implements BridgeApp {
  getAppInfo(): Promise<AppInfo> {
    throw new Error('Method not implemented.');
  }
  action(intentUrl: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

class AppStorage implements BridgeStorage {
  getAlbum(): { saveImage(base64Img: string): Promise<boolean> } {
    throw new Error('Method not implemented.');
  }
}

class AppBridge implements StandardBridge {
  http: BridgeHttp = new AppHttp();
  app: BridgeApp = new App();
  storage: BridgeStorage = new AppStorage();

  addEventListener(
    event: 'appReady' | 'appError',
    listener: (e: any) => void
  ): void {
    console.log(event);
    console.log(listener);
  }
}

const appBridge = new AppBridge();

export { appBridge };
