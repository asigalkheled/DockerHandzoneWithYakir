# DockerHandzoneWithYakir

#Build
#docker build -t  <tag_name> -f <dockerfile_path>
# docker build -t lab-dockerfile:v0.1 .

#Image -> Container
docker run -it lab-dockerfile:v0.1
docker run d lab-dockerfile:v0.2
#open tunel between my PC to my container
docker run -d -p <host_port>:<container_port> lab-dockerfile:v0.2
docker run -d -p 5000:5000 lab-dockerfile:v0.2
docker run -d --name lab1-finish -p 5000:5000 lab-dockerfile:v0.3

-it -> interact mode
-d -> detach mode
-port -> 

container run and not exit - docker ps
container run but application doesn't work - docker logs
container exit - docker ps -a

docker stop <container_id>
docker rm -f CONTAINER_NAME
docker exec -it <contaner_name> bash
