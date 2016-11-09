#!/bin/bash
cd devicereg
export PATH=$PATH:/home/circleci/webdrivers
robot -v browser:phantomjs robot-tests/
exit