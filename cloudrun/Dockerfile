FROM node:20-slim

WORKDIR /app

COPY ./.next ./.next
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

CMD ["yarn", "start"]

ENV HOST=0.0.0.0

ENV PORT=8080
