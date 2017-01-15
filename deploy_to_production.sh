#!/bin/bash
cd devicereg
echo "####### pulling from git #######"
git checkout -- .
git pull
echo "####### shut down the app and remove container #######"
docker-compose down
echo "####### remove the old docker images and container #######"
docker rm $(docker ps -aq)
docker rmi htw-berlin/devicer-robot htw-berlin/devicer-web
echo "####### building the new docker images #######"
docker-compose build
echo "####### starting the app #######"
docker-compose up -d
#echo "####### delete old dangling images #######"
#docker rmi $(docker images -f "dangling=true" -q)
exit