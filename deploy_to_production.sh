#!/bin/bash
cd devicereg
echo "shut down the app"
docker-compose down
echo "pulling from git"
git checkout -- .
git pull
echo "building the docker image"
docker-compose build
echo "starting up the docker container again"
docker-compose up -d
exit
