#!/bin/bash
URL=${URL:-"http://devicereg-frontend.f4.htw-berlin.de/#/"}
USER=${USERNAME:-"mustermaax@mail.de"}
BROWSER=${BROWSER:-"firefox"}
OUTPUTDIR=${OUTPUTDIR:-"app/static/test-output"}
ROBOT_TESTS=${ROBOT_TESTS:-"robot-tests/devicer-testsuite/"}
CONTAINER_NAME=${CONTAINER_NAME:-"devicereg_test"}
cd devicereg
docker run -e USER=${USER} -e URL=${URL} -e BROWSER=${BROWSER} --rm \
    -v $(pwd)/${ROBOT_TESTS}:/robot-tests/devicer-testsuite/ \
    -v $(pwd)/${OUTPUTDIR}:/robot-test-output  -ti ${CONTAINER_NAME} run.sh
exit