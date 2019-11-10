# Udagram Microservices

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

In this project, we will reuse the existing Udagram application which is in the directory course-02, refactor it to microservices and apply CI/CD with docker and containers. The microservice apps, docker configurations and kubernetes configurations are all in the directory course-03/exercises.

## Containerize the microservices

There are Dockerfile inside each of the microservice application, i.e. udacity-c3-frontend, udacity-c3-restapi-feed and udacity-c3-restapi-user. 

We will build images from all the microservice applications. Then, we use docker compose and run it all together. 

### Install docker with the link below:

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04

### Docker build individual microservice applications

$ cd <path/to/udacity-c3-restapi-user>  $ docker build -t <YourDockerHubName>/udacity-restapi-user .

$ cd <path/to/udacity-c3-restapi-feed>  $ docker build -t <YourDockerHubName>/udacity-restapi-feed .

$ cd <path/to/udacity-c3-frontend>  $ docker build -t <YourDockerHubName>/udacity-frontend .

$ cd <path/to/udacity-c3-deployment/docker>  $ docker build -t <YourDockerHubName>/reverseproxy .

### Run individual microservice applications (Example running udacity-restapi-feed)

In this step, all the environment variables need to be setup.  $ docker run --rm --publish 8080:8080 -v $HOME/.aws:/root/.aws --env UDAGRAM_USERNAME=$UDAGRAM_USERNAME --env UDAGRAM_PASSWORD=$UDAGRAM_PASSWORD --env UDAGRAM_DB=$UDAGRAM_DB --env UDAGRAM_HOST=$UDAGRAM_HOST --env UDAGRAM_DIALECT=$UDAGRAM_DIALECT --env UDAGRAM_REGION=$UDAGRAM_REGION --env UDAGRAM_PROFILE=$UDAGRAM_PROFILE --env UDAGRAM_AWS_MEDIA_BUCKET=$UDAGRAM_AWS_MEDIA_BUCKET --name feed <YourDockerHubName>/udacity-restapi-feed

### Docker compose to run all microservices

$ cd <path/to/udacity-c3-deployment/docker>  $ docker-compose up




