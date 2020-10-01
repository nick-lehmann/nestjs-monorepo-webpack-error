Nestjs webpack error
====================

## Setup

```bash
> git clone https://github.com/nick-lehmann/nestjs-monorepo-webpack-error
> cd nestjs-monorepo-webpack-error
> npx lerna bootstrap --use-workspaces
```

## Error reproduction

```bash
> cd apps/my-project
> nest start --watch
```

Error log is

```
ERROR in /private/tmp/nestjs-monorepo-webpack-error/node_modules/@nestjs/core/nest-application.js
Module not found: Error: Can't resolve '@nestjs/microservices/microservices-module' in '/private/tmp/nestjs-monorepo-webpack-error/node_modules/@nestjs/core'
 @ /private/tmp/nestjs-monorepo-webpack-error/node_modules/@nestjs/core/nest-application.js 17:120-173
 @ /private/tmp/nestjs-monorepo-webpack-error/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-webpack-error/node_modules/@nestjs/core/nest-application.js
Module not found: Error: Can't resolve '@nestjs/websockets/socket-module' in '/private/tmp/nestjs-monorepo-webpack-error/node_modules/@nestjs/core'
 @ /private/tmp/nestjs-monorepo-webpack-error/node_modules/@nestjs/core/nest-application.js 16:102-145
 @ /private/tmp/nestjs-monorepo-webpack-error/node_modules/@nestjs/core/index.js
 @ ./src/main.ts
```

When setting `compilerOptions.webpack` to false, changes made in `libs/core/src/core.service.ts` are not recognised.
