#!/bin/bash
robot -v port:80 -v url:http://192.168.99.100 -v browser:ff --outputdir app/static/test-output robot-tests