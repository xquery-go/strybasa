FROM node:18-alpine

WORKDIR /code

COPY package.json .

COPY yarn.lock .

RUN npm install

COPY --from=builder /app/next.config.js ./

COPY . .

EXPOSE 3000

CMD  ["npm", "run", "dev"]