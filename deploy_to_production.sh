#!/bin/bash
cd devicereg
echo "####### pulling from git #######"
git checkout -- .
git pull
echo "####### shut down the app and remove container #######"
docker-compose down
echo "####### remove the old docker images and container #######"
docker rm $(docker ps -aq)
docker rmi $(docker images -q -f dangling=true)
docker rmi htw-berlin/devicer-robot htw-berlin/devicer-web
echo "####### building the new docker images #######"
docker-compose build
echo "####### starting the app #######"
docker-compose up -d
# Delete all stopped containers
docker ps -q -f status=exited
# Delete all dangling (unused) images

exit