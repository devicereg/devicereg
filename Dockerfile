FROM node:6.8

RUN mkdir /src

RUN npm install -g nodemon

RUN MKDIR /src/app
WORKDIR /src/app/mockserver
ADD app/mockserver/package.json /src/app/mockserver/package.json
RUN npm install

WORKDIR /src/app
ADD app/package.json /src/package.json
RUN npm install

ADD app/nodemon.json /src/nodemon.json

EXPOSE 8080
EXPOSE 3001