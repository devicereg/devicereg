FROM node:6.8

RUN mkdir /src
RUN npm install -g nodemon

ADD mockserver /src/mockserver
RUN ls -axl /src/mockserver
RUN cd /src/mockserver && npm install

WORKDIR /src/app
ADD app/package.json /src/package.json
RUN npm install

ADD app/nodemon.json /src/nodemon.json

EXPOSE 8080
EXPOSE 3001