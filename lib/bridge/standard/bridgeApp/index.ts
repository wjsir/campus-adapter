export interface AppInfo {
  packageId: string;
  platform: 'iOS' | 'Android';
  versionName: string;
  versionCode: string;
}

export interface BridgeApp {
  getAppInfo(): Promise<AppInfo>;

  action(intentUrl: string): Promise<boolean>; //让app响应指定的IntentUrl
}
