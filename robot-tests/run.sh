#!/bin/bash
# Entry script to start Xvfb and set DISPLAY
set -e

# Set the defaults
DEFAULT_RES="1280x1024x24"
DEFAULT_DISPLAY=":99"
DEFAULT_WEB_IMAGE_NAME="web"
DEFAULT_WEB_IMAGE_PORT="8080"
DEFAULT_ROBOT_LOG_LEVEL="INFO" # Available levels: TRACE, DEBUG, INFO (default), WARN, NONE (no logging)
DEFAULT_ROBOT_TESTS="/robot-tests/devicer-testsuite/"
DEFAULT_ROBOT_USER="mustermax@htw-berlin.de"
DEFAULT_ROBOT_BROWSER="chrome"
DEFAULT_ROBOT_OUTPUTDIR="/robot-test-output"

# Use default if none specified as env var
RES=${RES:-$DEFAULT_RES}
DISPLAY=${DISPLAY:-$DEFAULT_DISPLAY}
WEB_IMAGE_NAME=${WEB_IMAGE_NAME:-$DEFAULT_WEB_IMAGE_NAME}
WEB_IMAGE_PORT=${WEB_IMAGE_PORT:-$DEFAULT_WEB_IMAGE_PORT}
WEB_URL=${WEB_URL:-"http://$DEFAULT_WEB_IMAGE_NAME:$DEFAULT_WEB_IMAGE_PORT/#/"}
ROBOT_LOG_LEVEL=${ROBOT_LOG_LEVEL:-$DEFAULT_ROBOT_LOG_LEVEL}
ROBOT_TESTS=${ROBOT_TESTS:-$DEFAULT_ROBOT_TESTS}
ROBOT_USER=${ROBOT_USER:-$DEFAULT_ROBOT_USER}
ROBOT_BROWSER=${ROBOT_BROWSER:-$DEFAULT_ROBOT_BROWSER}
ROBOT_OUTPUTDIR=${ROBOT_OUTPUTDIR:-$DEFAULT_ROBOT_OUTPUTDIR}

# Start Xvfb
echo -e "Starting Xvfb on DISPLAY ${DISPLAY} with RES ${RES}"
Xvfb ${DISPLAY} -ac -screen 0 ${RES} +extension RANDR &
export DISPLAY=${DISPLAY}

# Execute tests
echo -e "Executing robot tests at log level ${ROBOT_LOG_LEVEL}"
robot -v browser:${ROBOT_BROWSER} --outputdir ${ROBOT_OUTPUTDIR} --loglevel ${ROBOT_LOG_LEVEL} \
    -v user:${ROBOT_USER} -v url:${WEB_URL} ${ROBOT_TESTS}

# Stop Xvfb
kill -9 $(pgrep Xvfb)