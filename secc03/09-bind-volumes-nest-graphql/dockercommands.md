docker container run \
--name nest-app \
-w /app \
-p 80:3000 \
-v "$(pwd)":/app \
node:16-alpine3.16 \
sh -c "yarn install && yarn start:dev"

### windows

docker container run `--name nest-app`
-w /app `-p 80:3000`
-v "$(pwd)":/app `node:16-alpine3.16`
sh -c "yarn install && yarn start:dev"

docker container run \
--name nest-app \
-w /app \
-p 80:3000 \
-v "$(pwd)":/app \
node:18.16-alpine3.18 \
sh -c "yarn install && yarn start:dev"

### powershell

docker container run `--name nest-app`
-w /app `-p 80:3000`
-v "$(pwd)":/app `node:18.16-alpine3.18`
sh -c "yarn install && yarn start:dev"
