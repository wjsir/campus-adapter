export interface HttpConfig {
  url: string;
  methods: 'GET' | 'POST' | 'DELETE' | 'PUT';
  data: string | object;
  cookies: Map<string, string>;
  headers: Map<string, string>;
}

export interface HttpResponse {
  request: HttpConfig;
  headers: Map<string, string>;
  data: string;
}

export interface BridgeHttp {
  request(config: HttpConfig): Promise<HttpResponse>;
  get(url: string, options?: HttpConfig): Promise<HttpResponse>;
  post(
    url: string,
    data?: string | object,
    config?: HttpConfig
  ): Promise<HttpResponse>;
  delete(url: string, config?: HttpConfig): Promise<HttpResponse>;
  put(
    url: string,
    data?: string | object,
    config?: HttpConfig
  ): Promise<HttpResponse>;
}
