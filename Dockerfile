FROM node:18-alpine


# Define build arguments for environment variables
ARG VITE_API_URL
ARG VITE_COMPILER_URL

# Set environment variables during the build process
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_COMPILER_URL=$VITE_COMPILER_URL


WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

EXPOSE 8080

CMD [ "npm", "run", "preview","--", "--host" ]
