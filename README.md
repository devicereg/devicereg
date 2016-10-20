# Express app with Vue.js and nodemon server

Use [nodemon's](https://github.com/remy/nodemon) legacy mode to monitor file changes in your container. The app will restart, if you change any **.js**, **.json** or **.hjs** file.

## Prerequisites

### Install [Docker](https://www.docker.com/) on your system

For Mac and Windows users: If you haven't worked with docker before I would recommend you to install the [Docker Toolbox](https://www.docker.com/products/docker-toolbox) because it contains all required tools such as VirtualBox.

* For Mac OS X with brew installed execute the following command ``` brew install docker ```
* [Install instructions (only Docker)](https://docs.docker.com/installation/mac/) OR [install instructions (DockerToolbox RECOMMENDED)](https://docs.docker.com/toolbox/toolbox_install_mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) OR [install instructions (DockerToolbox RECOMMENDED)](https://docs.docker.com/toolbox/toolbox_install_windows/) for Windows (and other platforms)

### Install Boot2Docker on your system (only for Windows and Mac users)

* For Mac OS X with brew installed execute the following command ``` brew install boot2docker ``` (for help: [read this article](https://www.viget.com/articles/how-to-use-docker-on-os-x-the-missing-guide))

### Install [Docker Compose](http://docs.docker.com/compose/) on your system

If you have already installed the DockerToolbox in the previous step you can SKIP THIS STEP!

* Via bash script (recommended?): [install.sh script](https://gist.github.com/wdullaer/f1af16bd7e970389bad3)
* Python/pip: `sudo pip install -U docker-compose`
* For Mac OS X with brew installed execute the following command ``` brew install docker-compose ```
* Other: 
```bash
curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose; 
chmod +x /usr/local/bin/docker-compose
```

### Create a default docker machine

Windows and Mac users have to create a default docker machine. If you used the Quickstart Terminal to launch your first machine and set your terminal environment to point to it, a default machine was automatically created so you can SKIP THIS STEP. If not you should follow [these instructions](https://docs.docker.com/machine/get-started/#/create-a-machine).


## Setup



Run `docker-compose build`. It will

* install [nodemon](https://github.com/remy/nodemon) globally in your container
* install all dependencies from the package.json locally
* expose port 8080 to the host
* instruct the container to execute `npm start` on start up.

## Start

Run `docker-compose up` to create and start the container. The app should then be running on your docker daemon on port 80, port 8080 on the host machine (On OS X you can use `boot2docker ip` to find out the IP address).

## Notes on boot2docker

It [appears](https://github.com/boot2docker/boot2docker/issues/290) that boot2docker (OS X, Windows) currently does not automatically sync the system clock with the host system after a host resumes from sleep. This becomes a problem due to the way nodemon detects file changes. That might cause it to go bananas, if the clocks on both systems are "too much" out of sync. Until this is fixed, you might use [this workaround](https://github.com/boot2docker/boot2docker/issues/290#issuecomment-62384209) or simply do a manual sync via

```bash
/usr/local/bin/boot2docker ssh sudo ntpclient -s -h pool.ntp.org
```