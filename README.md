# Express app with Vue.js and nodemon server

Use [nodemon's](https://github.com/remy/nodemon) legacy mode to monitor file changes in your container. The app will restart, if you change any **.vue**, **.js**, **.json** or **.hjs** file.

## Prerequisites

### Install [Docker](https://www.docker.com/) on your system

For Mac and Windows users: If you haven't worked with docker before I would recommend you to install the [Docker Toolbox](https://www.docker.com/products/docker-toolbox) because it contains all required tools such as VirtualBox.

* For Mac OS X with brew installed run ``` brew install docker virtualbox ``` to install Docker and VirtualBox 
* [Install instructions (plain Docker)](https://docs.docker.com/installation/mac/) OR [install instructions (DockerToolbox PREFERED)](https://docs.docker.com/toolbox/toolbox_install_mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions (plain Docker)](https://docs.docker.com/engine/installation/windows/) OR [install instructions (DockerToolbox PREFERED)](https://docs.docker.com/toolbox/toolbox_install_windows/) for Windows

### Install [Docker Compose](http://docs.docker.com/compose/) on your system

If you have already installed the DockerToolbox in the previous step you can SKIP THIS STEP!

* For Mac OS X with brew installed run ``` brew install docker-compose ```
* Via bash script (recommended?): [install.sh script](https://gist.github.com/wdullaer/f1af16bd7e970389bad3)
* Python/pip: `sudo pip install -U docker-compose`
* Other: 
```bash
curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose; 
chmod +x /usr/local/bin/docker-compose
```

### Create a docker-machine

You can [create a docker machine manually](https://docs.docker.com/machine/get-started/#/create-a-machine). (Don't forget to set the environment variables)

Otherwise when you launch the Docker Quickstart Terminal a default docker-machine will be automatically created for you. If you already created a docker-machine or launched the Docker Quickstart Terminal you can go one step further.


## Setup

Run `docker-compose build`. It will

* install [nodemon](https://github.com/remy/nodemon) globally in your container
* install all dependencies from the package.json locally
* expose port 8080 to the host (Please note: only on Linux the host corresponds to localhost! On Windows and Mac you need to run ``` docker-machine ip ``` to find out the host ip)
* instruct the container to execute `npm start` on start up.

## Start

Run `docker-compose up` to create and start the container. The app should then be running on your docker daemon on port 80, port 8080 on the host machine (On OS X you can use `docker-machine ip` to find out the IP address).

# End-to-End Testing with the Robot Framework

## Prerequisites

### Install Firefox or/and Google Chrome

### Install Selenium 

### Install WebDrivers

### Install Robot Framework

### Install Selenium2Library

## Setup

### Add WebDriver executables to system paths

## Run tests

### Runing robot tests 

### View reports and log files
