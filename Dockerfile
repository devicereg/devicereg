FROM node:6.8

RUN mkdir /src

RUN npm install -g nodemon

WORKDIR /src/app
ADD app/package.json /src/package.json
RUN npm install

ADD app/nodemon.json /src/nodemon.json

EXPOSE 8080