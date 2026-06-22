#  Bookstore 

A full-featured REST API for managing a modern bookstore platform. This project provides comprehensive user authentication, book inventory management, and request validation capabilities built with industry-standard technologies.

## 📋 Project Overview

The My-Work Bookstore API is a production-ready backend solution that manages all aspects of a bookstore operation. It includes user management with authentication, complete CRUD operations for book inventory, input validation, and MongoDB database integration.

### Key Features

- **User Authentication & Management**
  - User registration with validation
  - User login and session management
  - Complete user profile CRUD operations
  - Secure password handling

- **Book Inventory Management**
  - Add and manage books in catalog
  - Search and retrieve book details
  - Update book information (price, stock, metadata)
  - Remove books from inventory
  - Full book details tracking (title, author, ISBN, price, stock count)

- **Request Validation**
  - Comprehensive input validation middleware
  - Data sanitization on all endpoints
  - Error handling with meaningful messages

- **Database Integration**
  - MongoDB for persistent data storage
  - Mongoose ODM for schema modeling
  - Connection pooling and error handling

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web framework and routing |
| **MongoDB** | NoSQL document database |
| **Mongoose** | MongoDB object modeling |
| **Express Validator** | Input validation and sanitization |

## 📁 Project Structure

```
My-Work/
├── index.js                          # Application entry point & server setup
├── package.json                      # Dependencies and project metadata
├── README.md                         # This file
├── .env                              # Environment variables (create locally)
│
├── configs/
│   ├── database.js                   # MongoDB connection setup
│   └── envConfig.js                  # Environment configuration loader
│
├── controller/
│   ├── user.controller.js            # User business logic & handlers
│   └── book.controller.js            # Book business logic & handlers
│
├── middlewares/
│   └── validation.middleware.js      # Request validation & sanitization
│
├── models/
│   ├── userModel.js                  # User Mongoose schema & model
│   └── bookModel.js                  # Book Mongoose schema & model
│
└── routes/
    ├── user.route.js                 # User endpoints definitions
    └── book.route.js                 # Book endpoints definitions
```

## ⚙️ Prerequisites

Before getting started, ensure you have:

- **Node.js** v14.0.0 or higher
- **npm** v6.0.0 or higher
- **MongoDB** v4.0 or higher (local or Atlas connection)
- **Git** (optional, for version control)

## 🚀 Getting Started

### 1. Installation

Clone or download the project:

```bash
cd My-Work
npm install
```

### 2. Environment Configuration

Create a `.env` file in the project root:

```env
# Server Configuration
PORT=8081
NODE_ENV=development

# Database Configuration
MONGODB_URL=mongodb://localhost:27017/bookstore
```

**For MongoDB Atlas:**
```env
MONGODB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/bookstore
```

### 3. Start the Application

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will be available at: `http://localhost:8081`

## 📡 API Endpoints

### User Endpoints

#### Register User
```
POST /api/user/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Login User
```
POST /api/user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Get All Users
```
GET /api/user
```
Returns array of all registered users.

#### Get User by ID
```
GET /api/user/:id
```
Returns specific user details by ID.

#### Update User
```
PATCH /api/user/:id
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

#### Delete User
```
DELETE /api/user/:id
```
Removes user from the system.

---

### Book Endpoints

#### Create Book
```
POST /api/book
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "978-0743273565",
  "price": 12.99,
  "stock": 50,
  "description": "A classic American novel"
}
```

#### Get All Books
```
GET /api/book
```
Returns array of all books in inventory.

#### Get Book by ID
```
GET /api/book/:id
```
Returns specific book details.

#### Update Book
```
PATCH /api/book/:id
Content-Type: application/json

{
  "price": 14.99,
  "stock": 45
}
```

#### Delete Book
```
DELETE /api/book/:id
```
Removes book from inventory.

---