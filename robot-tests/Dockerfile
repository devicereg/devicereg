FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y \
        python-pip \
        python-dev \
        gcc \
        apt-utils \
        libfreetype6 \
        libfontconfig \
        wget
RUN pip install --upgrade pip
RUN pip install \
        robotframework \
        robotframework-selenium2library

RUN wget -q https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
RUN tar xjf phantomjs-2.1.1-linux-x86_64.tar.bz2
RUN install -t /usr/local/bin phantomjs-2.1.1-linux-x86_64/bin/phantomjs
RUN rm -rf phantomjs-2.1.1-linux-x86_64
RUN rm phantomjs-2.1.1-linux-x86_64.tar.bz2

VOLUME ["/robot-tests/devicer-testsuite"]

EXPOSE 8080