FROM node:19.2.0-alpine3.17 as deps
WORKDIR /app
COPY package.json ./
RUN npm install

# ------------------- step----------------------
FROM node:19.2.0-alpine3.17 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

# ------------------- step----------------------
FROM node:19.2.0-alpine3.17 as prod-dep
WORKDIR /app
COPY package.json ./
RUN npm i --prod

# ------------------- step----------------------
FROM node:19.2.0-alpine3.17 as runner
WORKDIR /app
COPY --from=prod-dep /app/node_modules ./node_modules
COPY app.js ./
COPY tasks ./tasks

CMD [ "node", "app.js" ]
