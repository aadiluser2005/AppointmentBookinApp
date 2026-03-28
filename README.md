# 🗓️ Appointment Booking System (Microservices)

A scalable **appointment booking platform** built using the **MERN stack with microservices architecture**.  
The system separates responsibilities into independent services to improve **scalability, reliability, and maintainability**.

The platform includes **two client applications**:

- 👤 **User Frontend** – for users to book and manage appointments
- 🛠 **Admin Dashboard** – for administrators to manage appointments and system data

All requests from the frontend applications pass through a **central API Gateway** which routes them to the appropriate microservice.

---

# ✨ Key Features

- 📅 Appointment booking and management
- 👥 User authentication and management
- 🛠 Admin dashboard for system control
- ⚡ Redis caching for frequently accessed data
- 📩 Asynchronous email notifications using RabbitMQ
- 🔒 Database-level concurrency control to prevent double booking of slots
- 🧩 Microservices-based backend architecture

---

# 🏗 Architecture Overview

The system is divided into **multiple independent services**, each responsible for a specific domain.

## 🏗 Project Structure

```
AppointmentBooking
│
├── FRONTEND/                     # User booking application (React)
│
├── DASHBOARD/                    # Admin dashboard (React)
│
├── BACKEND/                      # Microservices backend
│   │
│   ├── MainGateway/              # API Gateway (entry point for all requests)
│   │
│   ├── adminService/             # Handles admin operations
│   │
│   ├── appointmentService/       # Appointment booking logic
│   │
│   ├── userService/              # User management and authentication
│   │
│   └── notificationService/      # Email notifications using RabbitMQ
│
└── docker-compose.yml            # Multi-container orchestration
```

---

## ⚙️ Architecture Overview

- **FRONTEND** → User interface where patients can book appointments  
- **DASHBOARD** → Admin interface to manage appointments and system data  
- **MainGateway** → Central entry point that routes requests to appropriate services  
- **Microservices** → Independent services handling different domains of the system

### Microservices Responsibilities

| Service | Responsibility |
|------|------|
MainGateway | API Gateway that exposes endpoints to frontend & dashboard |
userService | Handles user registration, login, and profile management |
appointmentService | Manages appointment booking and slot validation |
adminService | Admin operations and system management |
notificationService | Sends emails using RabbitMQ |

# ⚙️ System Flow

1️⃣ Users interact with **Frontend** or **Admin Dashboard**  
2️⃣ Requests are sent to the **API Gateway**  
3️⃣ Gateway routes requests to appropriate **microservices**  
4️⃣ Services communicate with the **database and messaging systems**  
5️⃣ **RabbitMQ** handles asynchronous tasks like sending emails  
6️⃣ **Redis** caches frequently accessed data to improve performance

---

# 🛠 Tech Stack

## Frontend
- ⚛️ React.js
- 🎨 Tailwind CSS

## Backend
- 🟢 Node.js
- 🚀 Express.js

## Database
- 🍃 MongoDB

## Caching
- ⚡ Redis

## Messaging
- 📩 RabbitMQ

## Version Control
- 🔧 Git
- 🌐 GitHub

---

# ⚡ Advanced Concepts Implemented

### Redis Caching
Used to store frequently accessed data to **reduce database load and improve performance**.

### RabbitMQ Messaging
Handles **asynchronous background tasks** such as sending appointment confirmation emails.

### Concurrency Control
Implemented **database-level concurrency handling** to ensure that **multiple users cannot book the same time slot simultaneously**.

### Microservices Architecture
Each domain is handled by a **separate service**, making the system easier to scale and maintain.

---
# 🚀 Running the Project

Follow the steps below to run the **Appointment Booking System** locally.

---

## 📥 1. Clone the Repository

```bash
git clone https://github.com/yourusername/appointment-booking-system.git
cd AppointmentBooking
```

---

## ⚙️ 2. Install Dependencies

Install dependencies for **backend services, frontend, and dashboard**.

### Backend

## ⚙️ Install Backend Dependencies

Each microservice has its own dependencies. Install them individually.

```bash
cd BACKEND/MainGateway
npm install

cd ../adminService
npm install

cd ../appointmentService
npm install

cd ../userService
npm install

cd ../notificationService
npm install
```

### Frontend

```bash
cd ../FRONTEND
npm install
```

### Dashboard

```bash
cd ../DASHBOARD
npm install
```

---

## ▶️ 3. Start the Applications

### Start Backend (API Gateway)

## ▶️ Start Backend Services

Each backend service runs independently.  
Open **separate terminal windows** and start each service.

---

### Start API Gateway

```bash
cd BACKEND/MainGateway
npm install
npm start
```

Runs on:

```
http://localhost:5000
```

---

### Start User Service

```bash
cd BACKEND/userService
npm install
npm start
```

---

### Start Appointment Service

```bash
cd BACKEND/appointmentService
npm install
npm start
```

---

### Start Admin Service

```bash
cd BACKEND/adminService
npm install
npm start
```

---

### Start Notification Service

```bash
cd BACKEND/notificationService
npm install
npm start
```

---

## ⚡ Backend Services Overview

| Service | Responsibility |
|-------|--------|
MainGateway | API Gateway exposed to frontend and dashboard |
userService | Handles user registration and authentication |
appointmentService | Manages appointment booking and slot validation |
adminService | Admin operations and management |
notificationService | Sends email notifications using RabbitMQ |

Backend will run on:

```
http://localhost:5000
```

---

### Start User Frontend

Open a new terminal:

```bash
cd FRONTEND
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

### Start Admin Dashboard

Open another terminal:

```bash
cd DASHBOARD
npm run dev
```

Dashboard will run on:

```
http://localhost:5174
```

---

## 🐳 Run with Docker (Optional)

You can also run the entire system using Docker:

```bash
docker-compose up --build
```

Stop containers:

```bash
docker-compose down
```

---

✅ After starting all services:

| Application | URL |
|-------------|-----|
User Frontend | http://localhost:5173 |
Admin Dashboard | http://localhost:5174 |
Backend API Gateway | http://localhost:5000 |

---

# 📌 Future Improvements

- Real-time notifications
- Payment integration
- Appointment analytics dashboard
- Rate limiting and API security

---

# 👨‍💻 Author

**Aadil Khan**

MERN Stack Developer  
GitHub: https://github.com/aadiluser2005
