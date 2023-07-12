# FROM --platform=$BUILDPLATFORM node:19.2.0-alpine3.17
FROM node:19.2.0-alpine3.17

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run test

RUN rm -rf tests && rm -rf node_modules

RUN npm i --prod

CMD [ "node", "app.js" ]
