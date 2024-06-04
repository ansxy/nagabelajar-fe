FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .


RUN npm run build
COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

EXPOSE 8080

CMD [ "npm", "run", "preview","--", "--host" ]
