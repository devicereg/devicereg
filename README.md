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
Just do it!

### Initialize a virtual environment (OPTIONAL)
Go to https://blog.dbrgn.ch/2012/9/18/virtualenv-quickstart/ to learn more about virtualenv and decide if you need one.

### Install Python 2.7... (pip inclusive)
Go to https://www.python.org/downloads/ and download/install Phython 2.7... (contains pip) for your OS.

### Install Selenium 
It is recommended to install Selenium via pip
``` pip install selenium ``` 

### Install WebDrivers
Go to http://www.seleniumhq.org/download/ and download the WebDriver executables for your OS. Geckodriver and/or Chromedriver will last. Unpack the zip archives and place the executables somewhere in your filesystem. Now you have to add the path to the directory where you placed the webdriver executables to your path(s) environment variable.  

* Windows: Go to "Advanced System Settings" > "Advanced" > "Environment Variables" then double click on the path variable and append the path to the webdriver executables (e.g. /bin/webdrivers). Afterwards you should restart all of your terminal instances running. In rare cases it could be possible that you have to restart your PC to apply the changes in the environment variables.
* Mac/Linux: You can execute the following command to add your webdriver executable directory to $PATH..
  ``` sudo export PATH=$PATH:/path/to/webdriver/executables/dir ```

### Install Robot Framework
``` pip install robotframework ``` 

### Install Selenium2Library
``` pip install robotframework-selenium2library ``` 

## Run tests

### Running robot tests 
To run tests in Google Chrome you simply need to run the following command in the root directory of the devicereg project.

``` robot robot-tests/deviceRegTests.robot ```

To specify an directory for the log files and reports you can use the --outputdir flag on robot. In the following case test output is saved under app/static/test-output/.

``` robot --outputdir app/static/test-output/ robot-tests/deviceRegTests.robot ```

To run robot test in another browser you can use the -v (--variable) flag on robot. To run the tests in Firefox (be sure you have the path to the geckodriver executable in your system path!) you can run this command:

``` robot -v browser:firefox robot-tests/deviceRegTests.robot ```

### View reports and log files
You can view the log files and reports in your browser and find them in the directory you specified with the 
--outputdir flag. The default location for the test output is the directory from where you run robot.
On the production server you can view the log file from the most recent robot test execution under this uri: http://devicereg-frontend.f4.htw-berlin.de/static/test-output/log.html
