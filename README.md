Nestjs webpack error
====================

## Setup

```bash
> git clone https://github.com/nick-lehmann/nestjs-monorepo-webpack-error
> npx lerna bootstrap --use-workspaces
```

## Error reproduction

```bash
> cd apps/my-project
> nest start --watch
```

Error log is

```
ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
Module not found: Error: Can't resolve '@nestjs/websockets/socket-module' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js 16:102-145
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/nest-microservice.js
Module not found: Error: Can't resolve '@nestjs/websockets/socket-module' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/nest-microservice.js 11:102-145
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-rmq.js
Module not found: Error: Can't resolve 'amqp-connection-manager' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-rmq.js 30:102-136
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/microservices-module.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-rmq.js
Module not found: Error: Can't resolve 'amqp-connection-manager' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-rmq.js 30:87-121
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-rmq.js
Module not found: Error: Can't resolve 'amqplib' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-rmq.js 29:73-91
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/microservices-module.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-rmq.js
Module not found: Error: Can't resolve 'amqplib' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-rmq.js 29:58-76
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-grpc.js
Module not found: Error: Can't resolve 'grpc' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-grpc.js 25:90-105
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/microservices-module.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-grpc.js
Module not found: Error: Can't resolve 'grpc' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-grpc.js 22:70-85
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-kafka.js
Module not found: Error: Can't resolve 'kafkajs' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-kafka.js 34:90-108
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/microservices-module.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/helpers/kafka-round-robin-partition-assigner.js
Module not found: Error: Can't resolve 'kafkajs' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/helpers'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/helpers/kafka-round-robin-partition-assigner.js 12:111-129
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/helpers/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-kafka.js
Module not found: Error: Can't resolve 'kafkajs' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-kafka.js 30:75-93
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-mqtt.js
Module not found: Error: Can't resolve 'mqtt' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-mqtt.js 19:85-100
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/microservices-module.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-mqtt.js
Module not found: Error: Can't resolve 'mqtt' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-mqtt.js 16:70-85
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-nats.js
Module not found: Error: Can't resolve 'nats' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-nats.js 17:85-100
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/microservices-module.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-nats.js
Module not found: Error: Can't resolve 'nats' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-nats.js 16:70-85
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-redis.js
Module not found: Error: Can't resolve 'redis' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/client-redis.js 20:88-104
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/client/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/microservices-module.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts

ERROR in /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-redis.js
Module not found: Error: Can't resolve 'redis' in '/private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server'
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/server-redis.js 17:73-89
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/server/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/microservices/index.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/nest-application.js
 @ /private/tmp/nestjs-monorepo-test/node_modules/@nestjs/core/index.js
 @ ./src/main.ts
```

When setting `compilerOptions.webpack` to false, changes made in `libs/core/src/core.service.ts` are not recognised.
