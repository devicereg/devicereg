#!/bin/bash
ROBOT_CONTAINER_NAME=${ROBOT_CONTAINER_NAME:-"devicereg_test_1"}
docker exec -ti ${ROBOT_CONTAINER_NAME} env.sh
docker exec -ti ${ROBOT_CONTAINER_NAME} run.sh
exit