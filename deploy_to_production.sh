#!/bin/bash
cd devicereg
echo "####### pulling from git #######"
git checkout -- .
git pull
echo "####### shut down the app and remove container #######"
docker-compose down
echo "####### remove the old docker images and containers #######"
docker rm $(docker ps -aq)
#docker rmi $(docker images -q -f dangling=true)
docker rmi htw-berlin/devicer-web htw-berlin/devicer-robot
echo "####### building the new docker images #######"
docker-compose build
echo "####### starting the app #######"
docker-compose up -d
exit