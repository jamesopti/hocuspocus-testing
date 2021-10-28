# hocuspocus-testing

Setting up unit tests for Hocuspocus

Struggling with compiling ES modules like @hocuspocus/server

## Solutions

1. `main` - Using ts-jest
2. `babel-jest-version` - Using babel-jest

## To Reproduce

`yarn install`

`yarn jest`

See this output:

```sh
➜  hocuspocus-testing git:(main) yarn jest
yarn run v1.22.10
$ NODE_OPTIONS='--experimental-vm-modules --experimental-modules --experimental-specifier-resolution=node' jest
(node:87028) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
ts-jest[config] (WARN) message TS151001: If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`). See https://blogs.msdn.microsoft.com/typescript/2018/01/31/announcing-typescript-2-7/#easier-ecmascript-module-interoperability for more information.
 FAIL  test/server.e2e-spec.ts
  ● Test suite failed to run

    Must use import to load ES Module: /Users/james/hocuspocus-testing/node_modules/@hocuspocus/server/dist/hocuspocus-server.esm.js

    > 1 | import { Server, Hocuspocus } from '@hocuspocus/server'
        | ^
      2 | import * as request from 'supertest'
      3 |
      4 | describe('Server (e2e)', () => {

      at Runtime.requireModule (node_modules/jest-runtime/build/index.js:791:21)
      at Object.<anonymous> (test/server.e2e-spec.ts:1:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.795 s
Ran all test suites.
error Command failed with exit code 1.
```
