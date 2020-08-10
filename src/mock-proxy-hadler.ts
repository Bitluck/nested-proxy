export class MockProxyHandler<T extends object> implements ProxyHandler<T> {
  public get<T extends object>(target: T, property: PropertyKey): any {
    const value = (target as any)[property];

    if (value) {
      if (typeof value === 'object') {
        return new Proxy(value, new MockProxyHandler());
      }

      return value;
    }

    return new Proxy(getEmptyObject, new MockProxyHandler());
  }
}

function getEmptyObject(): object {
  return {};
}
