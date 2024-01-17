FROM node:18-alpine as builder

WORKDIR /code

COPY package.json .

COPY yarn.lock .

RUN npm install

COPY . .

EXPOSE 3000

CMD  ["npm", "run", "dev"]