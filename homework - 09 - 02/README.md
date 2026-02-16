# 🧪 DevOps Assignment – Node.js, Logging & Docker Deployment

## 🎯 Objective

In this assignment, you will build and containerize a Node.js web application using **Express**, implement structured logging with **log4js**, and deploy multiple container instances while managing logs both inside and outside Docker containers.

This exercise is designed to strengthen your understanding of:

* Express.js server development
* Health check endpoints
* Application logging best practices
* Docker image creation
* Running multiple container instances
* Volume mounting and log persistence

---

## 📌 Requirements

### 1️⃣ Create a Node.js Express Application

Build a simple Node.js server using the **Express** framework.

#### Application Requirements:

* The server must listen on port `3000`

* Implement a route:

  ```
  GET /health
  ```

* The `/health` endpoint should return:

```json
{
  "status": "OK",
  "timestamp": "<current timestamp>"
}
```

---

### 2️⃣ Implement Logging (log4js)

Integrate **log4js** as the logging library.

#### Logging Requirements:

* Create a folder named:

```
logs/
```

* The application must write logs to a file named:

```
myapp.log
```

* Every time the `/health` endpoint is called:

  * Log the request
  * Log the timestamp
  * Log the container instance identifier (App1, App2, etc.)

Example log entry format:

```
[INFO] 2026-02-11T18:30:22Z - Health check called - App1
```

---

### 3️⃣ Dockerize the Application

Create a proper **Dockerfile** for the Node.js application.

#### Requirements:

* Use an official Node.js base image
* Set working directory
* Copy package.json
* Install dependencies
* Copy application source code
* Expose port 3000
* Use `CMD` to start the application

---

### 4️⃣ Build the Docker Image

Build a Docker image named:

```
my-node-health-app
```

---

### 5️⃣ Run Two Containers from the Same Image

Run **two separate containers** from the same image.

#### Requirements:

* Each container must:

  * Run on a different host port
  * Use an environment variable like:

```
APP_ID=App1
APP_ID=App2
```

Example:

| Container | Host Port | Container Port |
| --------- | --------- | -------------- |
| App1      | 3001      | 3000           |
| App2      | 3002      | 3000           |

---

### 6️⃣ Test in Browser

Open your browser and verify:

```
http://localhost:3001/health
http://localhost:3002/health
```

Ensure:

* Both endpoints respond correctly
* Each container logs its own APP_ID

---

### 7️⃣ Inspect Logs Inside Containers

Use:

```
docker exec -it <container_name> sh
```

Navigate to:

```
/app/logs
```

Verify:

* `myapp.log` exists
* Health check logs are written correctly

---

### 8️⃣ Persist Logs Using Docker Volumes

You must mount a **separate volume for each container** to persist logs outside the container.

Example structure on host:

```
logs/app1/
logs/app2/
```

Each container must write logs to its own host folder.

After running health checks:

* Verify that log files are visible **outside the containers**
* Confirm logs update in real time



docker build -t my-node-health-app:v0.5 .

docker run -d -p 3001:3000 -e APP_ID=App1 -v ./logs/app1:/usr/src/app/logs --name app1 my-node-health-app:v0.5

docker run -d -p 3002:3000 -e APP_ID=App2 -v ./logs/app2:/usr/src/app/logs --name app2 my-node-health-app:v0.5

docker exec -it app1 sh

cd logs

cat myapp.log

exit

ls -la logs

sudo chown -R akdev:akdev logs

cat logs/app1/myapp.log
