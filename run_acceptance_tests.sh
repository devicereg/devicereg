#!/bin/bash
ROBOT_URL=${ROBOT_URL:-"http://devicereg-frontend.f4.htw-berlin.de/#/"}
ROBOT_USER=${ROBOT_USER:-"muuustermax@mail.de"}
ROBOT_BROWSER=${ROBOT_BROWSER:-"chrome"}
ROBOT_OUTPUTDIR=${ROBOT_OUTPUTDIR:-"app/static/test-output"}
ROBOT_TESTS=${ROBOT_TESTS:-"robot-tests/devicer-testsuite/"}
ROBOT_IMAGE_NAME=${ROBOT_IMAGE_NAME:-"htw-berlin/devicer-robot"}
cd devicereg
docker run -e ROBOT_USER=${ROBOT_USER} -e ROBOT_URL=${ROBOT_URL} -e ROBOT_BROWSER=${ROBOT_BROWSER} --rm \
    -v $(pwd)/${ROBOT_TESTS}:/robot-tests/devicer-testsuite/ \
    -v $(pwd)/${ROBOT_OUTPUTDIR}:/robot-test-output -ti ${ROBOT_IMAGE_NAME} run.sh
exit