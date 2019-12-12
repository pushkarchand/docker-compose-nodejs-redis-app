# docker-compose-nodejs-redis-app
Demo Application to demonstrate NodeJS Redis integration and Mysql 5.7 with Docker Compose.
# First build and run Redis and Mysql images using docker
docker-compose up
  
 - Redis is running on port 6380 which is exposed externaly
 - Mysql is runing on port 3308 which is exposed externaly

# Run nodejs localy by running the following command
 npm start
  - Nodejs server is running on port 8081
  - Nodejs server is connecting to the Redis and Mysql server which is runing in docker container. 


