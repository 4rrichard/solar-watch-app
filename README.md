# 🌞 Solar Watch

A full-stack web application that allows users to register, log in, and view solar (sunrise/sunset) information based on selected cities.  
Built with **Spring Boot**, **PostgreSQL**, **React (Vite)**, and **Docker Compose**.

---

## 📂 Project Structure

```text
solar-watch/
├── backend/                     # Spring Boot backend
│   ├── src/main/java/
│   ├── pom.xml
│   ├── Dockerfile
│
├── frontend/                    # React frontend (Vite)
│   ├── src/
│   ├── vite.config.js
│   ├── Dockerfile
│
├── compose.yaml                 # Docker Compose configuration
├── .env.local                   # Local environment (for development)
├── .env.docker                  # Docker environment (for containers)
└── README.md
```

---

## ⚙️ Core Features

### 🧩 Backend (Spring Boot)
- User registration and login with JWT authentication.
- Role-based authorization (`ROLE_MEMBER`, `ROLE_ADMIN`).
- Secure password storage using **BCrypt**.
- PostgreSQL integration via Spring Data JPA.
- RESTful API design following layered architecture.
- Dockerized application ready for deployment.

### 🎨 Frontend (React + Vite)
- Simple UI for registration and login.
- Form-based authentication with JWT storage.
- Environment-based backend proxy configuration.
- Dockerized frontend accessible on port **5173**.

---

## ⚙️ Environment Variables

All required environment variables are documented in the `.env.sample` file.  
They include settings for the **database**, **OpenWeather API**, and **JWT authentication**.

Copy the example environment file and create your own `.env`:

### 🖥️ macOS / Linux
```bash
cp .env.sample .env
```
### 🪟 Windows (PowerShell)
```bash
Copy-Item .env.sample .env
```
Then open the newly created `.env` file and fill in your own values.

---

## 🐳 Run with Docker

### 🧭 Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

### ⚡ Start the full stack

From the project root (`solar-watch/`):

```bash
docker compose up --build
```

## 🚀 Running the Project

This will:

Build and start all three containers:

- 🗄️ **solarwatch-db** → PostgreSQL (**port 5430**)
- ⚙️ **solarwatch-app** → Spring Boot backend (**port 8080**)
- 💻 **solarwatch-frontend** → React app (**port 5173**)

---

### 🌐 Once Running

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:8080/api](http://localhost:8080/api)

---

## 🔐 API Overview

| Endpoint | Method | Description | Auth Required |
|-----------|--------|--------------|----------------|
| `/api/member/register` | **POST** | Register new user | ❌ No |
| `/api/member/signin` | **POST** | Log in and get JWT | ❌ No |
| `/api/sun-times/{city}` | **GET** | Get sunrise/sunset info | ✅ Yes (`ROLE_MEMBER`) |
| `/api/city/**` | **GET / PUT / ...** | Admin city operations | ✅ Yes (`ROLE_ADMIN`) |

Example registration request
```bash
POST /api/member/register
Content-Type: application/json

{
"username": "abc",
"password": "123"
}
```

---

## ⚡ Local Development (Optional)

If you prefer running the app locally without Docker:

### 🖥️ Backend
```bash
cd backend
mvn spring-boot:run
```

### 🖥️ Frontend
```bash
cd frontend
npm install
npm run dev
```

- Backend runs at http://localhost:8080

- Frontend runs at http://localhost:5173

---

## 🧩 Tech Stack

### ⚙️ Backend
- **Java 21**
- **Spring Boot 3.5+**
- **Spring Security (JWT)**
- **PostgreSQL**
- **Maven**
- **Docker**

### 💻 Frontend
- **React 18 (Vite)**
- **JavaScript / JSX**
- **Fetch API**
- **Docker**

## 🧪 Testing

Run all backend tests:

```bash
cd backend
mvn clean test
```
## 🧠 Notes

- Passwords are encoded with **BCrypt** before saving.
- **JWT tokens** are stored in `localStorage` on the frontend.
- Re-register a new account if authentication configuration changes.
- The **Vite proxy** is dynamically configured via `.env.local` and `.env.docker`.  

## ✨ Future Improvements

- UI improvements with **Material UI**
- Add **location-based automatic city detection**
- Enhanced **error handling** for invalid JWTs
- **Docker volume** for persistent database storage  
