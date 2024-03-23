FROM node:20-slim

WORKDIR /app

COPY ./.next ./.next
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

CMD ["yarn", "start"]

ENV HOST=0.0.0.0

ENV PORT=8080
