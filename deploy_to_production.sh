#!/bin/bash
cd devicereg
echo "pulling from git"
git pull
echo "building the docker image"
docker-compose build
docker-compose down
echo "starting up the docker container again"
docker-compose up -d
exit