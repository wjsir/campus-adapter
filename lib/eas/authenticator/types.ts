export interface AuthResult<T> {
  code: number;
  msg: string;
  data: T;
}

export interface EasAuthenticator<PARAM, T> {
  auth(param: PARAM): Promise<AuthResult<T>>;
}
