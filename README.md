# MERN Assignment App

This is a full-stack MERN (MongoDB, Express.js, React, Node.js) application built as part of a school assignment. It allows users to create and view posts. The project includes backend and frontend test coverage.

---

## 📁 Project Structure

```
mern-assignment-app/
│
├── client/             # React frontend
│   ├── src/
│   └── ...
│
├── server/             # Express backend with MongoDB
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── middleware/
│   └── ...
│
├── tests/              # Unit and integration tests
│
└── README.md
```

---

## 🚀 Features

- ✅ Create and view posts
- ✅ Full CRUD logic in Express
- ✅ MongoDB via Mongoose
- ✅ Responsive React UI (with Tailwind CSS)
- ✅ Unit and integration testing (Jest, React Testing Library)
- ✅ Environment-based config using `.env`

---

## 🧪 Testing

### ✅ Backend

- **Unit and integration tests** for API endpoints
- Located in: `server/tests/unit/` and `server/tests/integration/`

Run backend tests:

```bash
cd server
npm install
npm test
```

### ✅ Frontend

- Unit test for `<Button />` component using React Testing Library

Run frontend tests:

```bash
cd client
npm install
npm test
```

---

## 🛠️ Tech Stack

| Layer      | Tech                                 |
|------------|--------------------------------------|
| Frontend   | React, Tailwind CSS                  |
| Backend    | Express.js, Node.js                  |
| Database   | MongoDB with Mongoose                |
| Testing    | Jest, Supertest, React Testing Library |
| Versioning | Git + GitHub                         |

---

## 🌐 API Endpoints (Backend)

Base URL: `http://localhost:5000/api/posts`

| Method | Route              | Description        |
|--------|--------------------|--------------------|
| GET    | `/`                | Health check       |
| GET    | `/api/posts`       | Get all posts      |
| POST   | `/api/posts`       | Create a new post  |
| GET    | `/api/posts/:id`   | Get single post    |
| PUT    | `/api/posts/:id`   | Update post        |
| DELETE | `/api/posts/:id`   | Delete post        |

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/mern-assignment-app.git
cd mern-assignment-app
```

### 2. Setup Server

```bash
cd server
npm install

# Create a .env file in /server with:
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your-db

npm run dev
```

### 3. Setup Client

```bash
cd client
npm install
npm start
```

---

## 📸 Screenshots

> 📷 Include screenshots of:
### ✅ App UI
![App UI](./client/public/screenshots/Screenshot%202025-07-17%20183301.png)

### ✅ Frontend Tests
![Frontend Tests](./client/public/screenshots/Screenshot%202025-07-17%20191359.png)

### ✅ Backend Tests
![Backend Tests](./client/public/screenshots//Screenshot%202025-07-17%20191835.png)

---



