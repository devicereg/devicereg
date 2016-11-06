#!/bin/bash
ssh $SSH_SERVER

cd devicereg
git pull
docker-compose up --build -d