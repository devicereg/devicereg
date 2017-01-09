#!/bin/bash
cd devicereg
echo "####### pulling from git #######"
git checkout -- .
git pull
echo "####### shut down the app and remove container #######"
docker-compose down
docker-compose rm -f
echo "####### delete all docker images #######"
docker rmi $(docker images -q)
echo "####### building the new docker images #######"
docker-compose build
echo "####### starting the app #######"
docker-compose up -d
exit