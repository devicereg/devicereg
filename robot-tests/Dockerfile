FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y \
        git \
        python-pip \
        python-dev \
        gcc \
        apt-utils \
        libfreetype6 \
        libfontconfig \
        wget \
        xvfb \
        dbus \
        firefox
RUN pip install --upgrade pip
RUN pip install \
        robotframework \
        robotframework-selenium2library

# Install phantomJS webdriver
RUN wget -q https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2 && \
        tar xjf phantomjs-2.1.1-linux-x86_64.tar.bz2 && \
        install -t /usr/local/bin phantomjs-2.1.1-linux-x86_64/bin/phantomjs && \
        rm -rf phantomjs-2.1.1-linux-x86_64 && \
        rm phantomjs-2.1.1-linux-x86_64.tar.bz2

# Install chrome
RUN apt-get install -y \
        libgconf-2-4 \
        libnspr4 \
        libnss3 \
        libpango1.0-0 \
        libxss1 \
        fonts-liberation \
        libappindicator1 \
        xdg-utils

RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
        dpkg -i google-chrome-stable_current_amd64.deb && \
        rm -rf google-chrome-stable_current_amd64.deb

COPY webdriver-executables/chromedriver /usr/local/bin/chromedriver
COPY webdriver-executables/geckodriver /usr/local/bin/geckodriver

ADD run.sh /usr/local/bin/run.sh
RUN chmod +x /usr/local/bin/run.sh