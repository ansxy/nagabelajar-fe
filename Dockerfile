FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Set environment variables (only if you're not using .env files)
ARG VITE_API_URL
ARG VITE_COMPILER_URL
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_COMPILER_URL=$VITE_COMPILER_URL

RUN npm run build
COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

EXPOSE 8080

CMD [ "npm", "run", "preview","--", "--host" ]
