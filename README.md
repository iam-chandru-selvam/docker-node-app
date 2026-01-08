## 📄 `README.md`
---
# Dockerized Node.js Application 🐳🚀

This is a simple Node.js + Express application containerized using Docker.  
The project demonstrates how to build, run, and deploy a Node.js app using Docker.

---
## 📂 Project Structure
````

.
├── Dockerfile
├── package.json
├── server.js
└── README.md

````

---

## 🛠 Technologies Used
- Node.js
- Express.js
- Docker
- Git & GitHub

---

## 🐳 Dockerfile Overview
- Uses official Node.js 21 image
- Installs dependencies using `npm install`
- Exposes port 8909
- Runs the app using `node server.js`

---

## 🚀 How to Run the Project

### 1️⃣ Build Docker Image
````
docker build -t docker-node-app .
````

### 2️⃣ Run Docker Container

````
docker run -p 8909:8909 docker-node-app
````

---

## 🌐 Access the Application

Open your browser and go to:

```
http://localhost:8909
```

You should see:

```
🚀 Node.js app is running inside Docker!
```

---

## 📌 Learning Outcome

* Understanding Docker images & containers
* Writing Dockerfiles
* Containerizing a Node.js application
* Pushing Docker projects to GitHub

---

## 👨‍💻 Author

**Chandru S**
B.E CSE | Anna University

---

## ✅ Next Steps (Very Important)
After creating `README.md`:

````
git add README.md
git commit -m "Add README documentation"
git push
````

---
