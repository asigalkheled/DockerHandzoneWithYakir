# nodejs already exist in this image
FROM node:20

#create folder +cd folder
WORKDIR /usr/src/app 

# copy nodejs configuration file
COPY ./package.json .

#create node_modules: install express based on package.json file
RUN npm install

# copy the application structure
COPY . .

#which port preffered by developer but not must be
EXPOSE 5000

#start the application
CMD ["node","server.js"]


#git clone
#cd repo
#npm install / npm i
#node ./server.js