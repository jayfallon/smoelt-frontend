# Smoelt Frontend

This repository works together with the [Smoelt Backend](https://github.com/jayfallon/smoelt-backend) to serve as the frontend interface for viewing and creating landing pages. It runs a [Next.js](https://nextjs.org/) server on your localhost which connects to the Smoelt Backend server also running on your localhost. You must have the backend server running on your machine for the frontend to work.

### Prerequisites

In order to install and run the server, you will need to have [Node.js](https://nodejs.org/en/download/) installed on your local machine.

#### Check Node.js

To see if Node.js is already installed on your machine, enter the following command in your terminal window:

`node --version`

if it responds with something like: `v10.11.0`, then you are good to proceed without installing Node, otherwise you will need to install it.

#### Install Node.js

Node.js can be installed on machines running macOS, Windows or Linux, along with other platforms, and the preferred method is installing the current LTS version via the appropriate platform installer.

You will also need to have Git installed on your machine and a GitHub account, but I'm assuming that is already the case.

### Install Smoelt Backend

If you haven't done so already, please install and run the backend server. Instructions can be found at: [Smoelt Backend](https://github.com/jayfallon/smoelt-backend)

### Installing the Smoelt Frontend

Once you have Node.js installed on your machine and you have the backend server running at [http://localhost:4444](http://localhost:4444), you can clone and install the frontend. You can do this in the Smoelt folder if you've already created it or in any other folder on your machine.

#### Clone

Next, clone the application:

`git clone https://github.com/jayfallon/smoelt-frontend.git`

The repository is is publicly available so all you will need it Git installed on your machine. If you encounter any problems cloning the repository, please let me know and I will provide a fix.

#### Install

Once the repository has been cloned, you will need to install the Node modules from the root folder of the Frontend repository:

`cd smoelt-frontend && npm install`

This should take no more than a moment and as 12/29/18, no vulnerabilities were found in any of the node modules.

#### Run

Once installed all of the node modules, you'll be able to run the server in a dev environment using the following command:

`npm run dev`

If everything went smoothly, 🙏, the terminal should respond with:

`> Ready on http://localhost:7777`

You can now access the frontend at [http://localhost:7777](http://localhost:7777).
