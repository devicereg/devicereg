#!/bin/bash
export ROBOT_CONTAINER_NAME=${ROBOT_CONTAINER_NAME:-"devicereg_test_1"} && \
    export ROBOT_DISPLAY=${ROBOT_DISPLAY:-":99"} && \
    export ROBOT_DISPLAY_RESOLUTION=${ROBOT_DISPLAY_RESOLUTION:-"1280x1024x24"} && \
    export ROBOT_BROWSER=${ROBOT_BROWSER:-"firefox"} && \
    export ROBOT_USER=${ROBOT_USER:-"mustermax@htw-berlin.de"} && \
    export ROBOT_TESTS=${ROBOT_TESTS:-"/robot-tests/devicer-testsuite/"} && \
    export ROBOT_OUTPUTDIR=${ROBOT_OUTPUTDIR:-"/robot-test-output"} && \
    export ROBOT_LOG_LEVEL=${ROBOT_LOG_LEVEL:-"INFO"}  && \
    export WEB_IMAGE_HOST_NAME=${WEB_IMAGE_HOST_NAME:-"web"} && \
    export WEB_IMAGE_PORT=${WEB_IMAGE_PORT:-"8080"}