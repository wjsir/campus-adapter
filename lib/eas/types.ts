import { EasAuthenticator } from './authenticator/types';

export enum EasType {
  Undergraduate = 'Undergraduate', //本科
  Postgraduate = 'Postgraduate', //研究生
}

export interface School {
  getUid(): string;
  getName(): string;
  getEAS(easType: EasType): EAS | undefined;
}

export interface EAS {
  getEasAuthenticator(): EasAuthenticator<any, any>;
}
