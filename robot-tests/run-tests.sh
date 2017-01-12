#!/usr/bin/env bash
WORKDIR=`pwd`
docker run -ti -v ${WORKDIR}/devicer-testsuite:/robot-tests/devicer-testsuite htw-berlin/devicer-robot robot -v browser:phantomjs --outputdir /robot-tests/devicer-testsuite/test-output /robot-tests/devicer-testsuite/

#docker run -ti -v ${WORKDIR}/devicer-testsuite:/robot-tests/devicer-testsuite htw-berlin/devicer-robot bash