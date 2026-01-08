FROM node:21

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8909

CMD ["node", "server.js"]
