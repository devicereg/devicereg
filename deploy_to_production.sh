#!/bin/bash
cd devicereg
echo "####### pulling from git #######"
git checkout -- .
git pull
echo "####### building the new docker images #######"
docker-compose build
echo "####### shut down the app and remove container #######"
docker-compose down
echo "####### delete old dangling images #######"
docker rmi $(docker images -f "dangling=true" -q)
echo "####### starting the app #######"
docker-compose up -d
exit