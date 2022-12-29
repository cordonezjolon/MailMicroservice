FROM node:16.16.0-alpine3.15
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY package*.json ./
COPY .env ./
RUN npm install
#RUN npm ci --only=production
COPY ./dist/src/ .
EXPOSE 8080
CMD [ "node", "./config/server.js" ]