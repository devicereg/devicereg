FROM ubuntu:latest

# Install robotframework, virtual framebuffer, ...
RUN apt-get update && \
    apt-get install -y \
        git \
        python-pip \
        python-dev \
        gcc \
        apt-utils \
        libfreetype6 \
        libfontconfig \
        wget \
        xvfb \
        firefox \
        dbus && \
    pip install --upgrade pip && \
    pip install \
        robotframework \
        robotframework-selenium2library && \
#### Clean up
    apt-get remove -y git python-pip python-dev gcc && \
    rm -rf /var/lib/apt/lists/*

# Install Firefox 52 and Geckodriver 15
COPY browsers/firefox-mozilla-build_52.0-0ubuntu1_amd64.deb /tmp/firefox52.deb
RUN apt install /tmp/firefox52.deb && rm /tmp/firefox52.deb && apt remove -y firefox

COPY webdrivers/geckodriver /usr/local/bin/geckodriver
RUN chmod +x /usr/local/bin/geckodriver

# Install phantomJS webdriver
RUN wget -q https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2 && \
        tar xjf phantomjs-2.1.1-linux-x86_64.tar.bz2 && \
        install -t /usr/local/bin phantomjs-2.1.1-linux-x86_64/bin/phantomjs && \
        rm -rf phantomjs-2.1.1-linux-x86_64 && \
        rm phantomjs-2.1.1-linux-x86_64.tar.bz2

RUN mkdir /robot-tests && \
    mkdir /robot-test-output

ADD run.sh /usr/local/bin/run.sh
RUN chmod +x /usr/local/bin/run.sh

ENTRYPOINT ["run.sh"]
#CMD tail -f /dev/null



