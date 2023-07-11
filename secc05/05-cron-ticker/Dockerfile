FROM node:19.2.0-alpine3.17

WORKDIR /app

COPY package.json ./

RUN npm install

COPY app.js ./

CMD [ "node", "app.js" ]
