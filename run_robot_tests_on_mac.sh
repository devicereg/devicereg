#!/bin/bash
robot -v port:80 -v host:http://localhost -v user:$1 -v browser:chrome --outputdir app/static/test-output robot-tests