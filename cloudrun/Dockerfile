FROM node:20-slim

WORKDIR /app

COPY ./ ./

RUN yarn install

RUN yarn build

CMD ["yarn", "start"]

ENV HOST=0.0.0.0

ENV PORT=8080
