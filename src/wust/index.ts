import {
  AuthResult,
  EasAuthenticator,
} from '../../lib/eas/authenticator/types';
import { EAS, EasType, School } from '../../lib/eas/types';

import { globalBridge } from '../../lib/main';

class WustAuthenticator
  implements EasAuthenticator<{ stduentId: string; pass: string }, string>
{
  auth(param: {
    stduentId: string;
    pass: string;
  }): Promise<AuthResult<string>> {
    console.log(param);
    return new Promise<AuthResult<string>>(async (resolve, reject) => {
      let r = await globalBridge.http.get('https://zhiwya.com');
      resolve(r as unknown as AuthResult<string>);
      console.log(r.data);
      reject()
    });
  }
}

class WustEAS implements EAS {
  getEasAuthenticator(): EasAuthenticator<any, any> {
    return new WustAuthenticator();
  }
}

export class Wust implements School {
  undergraduateEas: WustEAS;
  constructor() {
    this.undergraduateEas = new WustEAS();
  }
  getUid(): string {
    return 'mZ4NhGB2yLOHJjlA7DUb9g==';
  }
  getName(): string {
    return '武汉科技大学';
  }
  getEAS(easType: EasType): EAS | undefined {
    switch (easType) {
      default:
      case EasType.Postgraduate:
        return undefined;
      case EasType.Undergraduate:
        return this.undergraduateEas;
    }
  }
}
