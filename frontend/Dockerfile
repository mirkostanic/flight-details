FROM node:latest

WORKDIR /usr/src/inflight-frontend

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
