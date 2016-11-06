#!/bin/bash
cd devicereg
git pull
docker-compose build
docker-compose down
docker-compose up -d
exit