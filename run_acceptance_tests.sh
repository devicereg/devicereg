#!/bin/bash
URL=${URL:-"http://devicereg-frontend.f4.htw-berlin.de/#/"}
USER=${USERNAME:-"mustermax@mail.de"}
BROWSER=${BROWSER:-"chrome"}
OUTPUTDIR=${OUTPUTDIR:-"devicereg/app/static/test-output"}
ROBOT_TESTS=${ROBOT_TESTS:-"devicereg/robot-tests/devicer-testsuite/"}
CONTAINER_NAME=${CONTAINER_NAME:-"devicereg_test"}

docker run -e USER=${USER} -e URL=${URL} -e BROWSER=${BROWSER} --rm \
    -v $(pwd)/${ROBOT_TESTS}:/robot-tests/devicer-testsuite/ \
    -v $(pwd)/${OUTPUTDIR}:/robot-test-output  -ti ${CONTAINER_NAME}
exit