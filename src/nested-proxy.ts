import { MockProxyHandler } from './mock-proxy-hadler';

export class NestedProxy<T extends object> {
  constructor(target: T = {} as any, handler: ProxyHandler<T> = new MockProxyHandler<T>()) {
    return new Proxy(target, handler);
  }
}
