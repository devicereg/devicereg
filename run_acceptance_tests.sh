#!/bin/bash
cd devicereg
export PATH=$PATH:/home/circleci/webdrivers
robot -v browser:phantomjs --outputdir app/static/test-output/ robot-tests/devicer-testsuite
exit