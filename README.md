# 🔐 Advanced Authentication System

An advanced **Authentication System** built with **Node.js**, **Express**, and **MongoDB**, offering secure and scalable user authentication for modern applications.  
Users can sign up, log in, reset passwords, and verify their identity via **email** or **phone** (with OTP or call-based verification).

---

## 🚀 Features

- 🔑 **User Authentication** – Sign up, log in, and log out securely  
- 📞 **Phone Verification** – Receive a verification call to confirm your identity  
- 📧 **Email Verification** – Get an OTP sent to your registered email for verification  
- 🔁 **Password Reset** – Reset forgotten passwords via secure token-based links  
- 👤 **Get User** – Fetch user details safely with authentication middleware  
- 🧩 **Input Validation** – Ensures strong passwords and valid user inputs  
- 🧱 **Scalable Structure** – Organized MVC pattern for easy maintenance and extension  

---

## 🎯 Purpose

This project demonstrates a **complete backend authentication flow**, focusing on security, scalability, and developer best practices.  
It's ideal as a **starter template** for production-ready authentication in any Node.js-based web or mobile application.

---

## 🧰 Tech Stack

| Technology | Description |
|-------------|-------------|
| **Node.js** | JavaScript runtime for backend |
| **Express.js** | Lightweight and fast web framework |
| **MongoDB** | NoSQL database for flexible data storage |
| **Mongoose** | Elegant MongoDB object modeling |
| **bcrypt.js** | For password hashing and security |
| **JWT (JSON Web Token)** | For secure user session management |
| **Nodemailer / Twilio** | For email and phone verification |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally 👇

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Sanskarizm/authentication-system.git
```

---

## 📡 API Endpoints

### User Authentication

| Endpoint | Method | Description | Body |
|----------|--------|-------------|------|
| `/api/v1/user/register` | POST | Register a new user | `{ name, email, phone, password, verificationMethod }` |
| `/api/v1/user/login` | POST | Login existing user | `{ email, password }` |
| `/api/v1/user/logout` | GET | Logout the user | - |
| `/api/v1/user/me` | GET | Get current user details | - |

### Password Management

| Endpoint | Method | Description | Body |
|----------|--------|-------------|------|
| `/api/v1/user/password/forgot` | POST | Request password reset | `{ email }` |
| `/api/v1/user/password/reset/:token` | PUT | Reset password using token | `{ password, confirmPassword }` |

### Verification

| Endpoint | Method | Description | Body |
|----------|--------|-------------|------|
| `/api/v1/user/otp-verification` | POST | Verify user via OTP | `{ email, otp }` |

---

## 🔒 Security Best Practices

- Passwords are hashed using **bcrypt.js** with salt rounds
- JWTs are used for stateless session management
- Input validation and sanitization on all endpoints
- CORS enabled for secure cross-origin requests
- Environment variables for sensitive data (API keys, database URIs)
- Rate limiting to prevent brute force attacks

---

## 📝 Example Usage

### Register a New User
```bash
curl -X POST https://advanced-authentication-system-r3br.vercel.app/api/v1/user/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sanskar",
    "email": "chotujainj@gmail.com",
    "phone": "+917000252000",
    "password": "sans@1124",
    "verificationMethod": "email"
  }'
```

### Login
```bash
curl -X POST https://advanced-authentication-system-r3br.vercel.app/api/v1/user/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "chotujainj@gmail.com",
    "password": "sans@1124"
  }'
```

### Get Current User
```bash
curl -X GET https://advanced-authentication-system-r3br.vercel.app/api/v1/user/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is open source and available under the MIT License.