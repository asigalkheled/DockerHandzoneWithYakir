create folder LAb3
cd to Lab3
npm init -y
npm install express
npm start
docker build -t lab3-volume:v0.1 .
docker run -d --name Lab3_first -v ./shared_file.txt:/usr/src/app/shared_file.txt lab3-volume:v0.1
docker exec -it Lab3_first bash
cat shared_file.txt
apt update
apt install nano
nano shared_file.txt
add line in shared_file.txt
view updated file in VSCode
update file in VSCode
cat shared_file.txt and see changes
exit