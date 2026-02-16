FROM node:20

WORKDIR /usr/src/app

COPY ./package.json .

ENV PORT=3000

ENV APP_ID=App1

RUN npm install

COPY . .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]