#!/bin/bash
docker-compose stop test
docker-compose rm -f test
docker-compose up test