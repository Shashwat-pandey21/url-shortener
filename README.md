# 🔗 URL Shortener

A full-stack URL Shortener application built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. The application allows authenticated users to generate short URLs, redirect to the original URL, and track click analytics.

## 🚀 Features

- User Signup & Login
- Session-Based Authentication using Cookies
- Generate Short URLs
- Redirect to Original URLs
- URL Click Analytics
- Protected Routes
- MongoDB Integration
- MVC Architecture

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Cookie Parser
- UUID
- ShortID

## 📂 Folder Structure

```
controller/
middlewares/
models/
routes/
service/
views/
index.js
connection.js
```

## ▶️ Installation

Clone the repository

```bash
git clone https://github.com/Shashwat-pandey21/URL-Shortener.git
```

Install dependencies

```bash
npm install
```

Start MongoDB

```bash
mongod
```

Run the project

```bash
npm start
```

Open your browser

```
http://localhost:8001
```

## 📊 Project Workflow

```
User Login
      ↓
Generate Short URL
      ↓
Store in MongoDB
      ↓
Receive Short ID
      ↓
Open Short URL
      ↓
Redirect to Original URL
      ↓
Track Click Analytics
```

## 📈 Future Improvements

- JWT Authentication
- Password Hashing using bcrypt
- QR Code Generation
- Custom Short URLs
- URL Expiration
- User Dashboard

## 👨‍💻 Author

**Shashwat Pandey**

- GitHub: https://github.com/Shashwat-pandey21
- LeetCode: https://leetcode.com/u/shashwatpandey_21/
- LinkedIn: https://linkedin.com/in/shashwat-pandey-21

⭐ If you like this project, give it a star.