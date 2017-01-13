#!/bin/bash
# Entry script to start Xvfb and set display
set -e

# Set the defaults
DEFAULT_LOG_LEVEL="INFO" # Available levels: TRACE, DEBUG, INFO (default), WARN, NONE (no logging)
DEFAULT_RES="1280x1024x24"
DEFAULT_DISPLAY=":99"
DEFAULT_ROBOT_TESTS="/robot-tests/devicer-testsuite/"
DEFAULT_URL="http://devicereg-frontend.f4.htw-berlin.de/#/"
DEFAULT_USER="mustermax@htw-berlin.de"
DEFAULT_BROWSER="phantomjs"
DEFAULT_OUTPUTDIR="/robot-test-output"

# Use default if none specified as env var
LOG_LEVEL=${LOG_LEVEL:-$DEFAULT_LOG_LEVEL}
RES=${RES:-$DEFAULT_RES}
DISPLAY=${DISPLAY:-$DEFAULT_DISPLAY}
ROBOT_TESTS=${ROBOT_TESTS:-$DEFAULT_ROBOT_TESTS}
USER=${USER:-$DEFAULT_USER}
URL=${URL:-$DEFAULT_URL}
BROWSER=${BROWSER:-$DEFAULT_BROWSER}
OUTPUTDIR=${OUTPUTDIR:-$DEFAULT_OUTPUTDIR}

# Start Xvfb
echo -e "Starting Xvfb on display ${DISPLAY} with res ${RES}"
Xvfb ${DISPLAY} -ac -screen 0 ${RES} +extension RANDR &
export DISPLAY=${DISPLAY}

# Execute tests
echo -e "Executing robot tests at log level ${LOG_LEVEL}"
#pybot --loglevel ${LOG_LEVEL} ${ROBOT_TESTS}
robot -v browser:${BROWSER} --outputdir ${OUTPUTDIR} --loglevel ${LOG_LEVEL} \
    -v user:${USER} -v url:${URL} ${ROBOT_TESTS}

# Stop Xvfb
kill -9 $(pgrep Xvfb)