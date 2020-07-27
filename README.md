## To test locally

Run the following commands
`git clone https://github.com/Rexben001/server-planner-server.git` to clone the repo
`cd server-planner-server` cd into the working directory
`npm install` install all the necessary dependencies
`npm start` start the app
`npm test` run the test cases

## To run on docker

Run the following commands
`git clone https://github.com/Rexben001/server-planner-server.git` to clone the repo
`cd server-planner-server` cd into the working directory
`docker build -t <image-name> .` build docker image
`docker run -p 49160:9000 -d <image-name>` run the docker image
