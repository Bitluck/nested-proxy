# nested-proxy

Lightweight package for deep stubbing.

## Usage

```typescript
import { NestedProxy } from 'nested-proxy';

const stub = new NestedProxy();

console.log(stub.a.b.c); // Proxy object
console.log(stub.a.b.c()); // {};
console.log(stub['a'].b['c'].d()); // {}
```
