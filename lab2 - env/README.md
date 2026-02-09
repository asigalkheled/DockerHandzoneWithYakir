docker run -d --name Lab2 -p 5000:4000 lab2-env:v0.1

docker run -d --name Lab2.1 -p 4000:3500 -e PORT=3500 lab2