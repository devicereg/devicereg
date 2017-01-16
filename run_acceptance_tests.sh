#!/bin/bash
ROBOT_DISPLAY_RESOLUTION=${ROBOT_DISPLAY_RESOLUTION:-"1280x1024x24"}
ROBOT_USER=${ROBOT_USER:-"mustermax@mail.de"}
ROBOT_BROWSER=${ROBOT_BROWSER:-"chrome"}
ROBOT_OUTPUTDIR=${ROBOT_OUTPUTDIR:-"devicereg/app/static/test-output"}
ROBOT_TESTS=${ROBOT_TESTS:-"devicereg/robot-tests/devicer-testsuite/"}
ROBOT_IMAGE_NAME=${ROBOT_IMAGE_NAME:-"htw-berlin/devicer-robot"}

WEB_IMAGE_NAME=${WEB_IMAGE_NAME:-"web"}
WEB_IMAGE_PORT=${WEB_IMAGE_PORT:-"8080"}
WEB_CONTAINER_NAME=${WEB_CONTAINER_NAME:-"devicereg_web_1"}
COMPOSE_NETWORK_NAME=${COMPOSE_NETWORK_NAME:-"devicereg_default"}

docker run --rm -e ROBOT_USER=${ROBOT_USER} -e WEB_IMAGE_NAME=${WEB_IMAGE_NAME} \
    -e WEB_IMAGE_PORT=${WEB_IMAGE_PORT} -e ROBOT_BROWSER=${ROBOT_BROWSER} -e ROBOT_DISPLAY_RESOLUTION=${ROBOT_DISPLAY_RESOLUTION} \
    -v $(pwd)/${ROBOT_TESTS}:/robot-tests/devicer-testsuite/ -v $(pwd)/${ROBOT_OUTPUTDIR}:/robot-test-output \
    --link ${WEB_CONTAINER_NAME}:${WEB_IMAGE_NAME}  -ti --net ${COMPOSE_NETWORK_NAME} ${ROBOT_IMAGE_NAME} run.sh
exit