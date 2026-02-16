docker build -t my-node-health-app:v0.5 .
docker run -d -p 3001:3000 -e APP_ID=App1 -v ./logs/app1:/usr/src/app/logs --name app1 my-node-health-app:v0.5
docker run -d -p 3002:3000 -e APP_ID=App2 -v ./logs/app2:/usr/src/app/logs --name app2 my-node-health-app:v0.5
docker exec -it app1 sh
cd logs
cat myapp.log
exit
ls -la logs
sudo chown -R akdev:akdev logs
#sudo chmod -R 777 logs