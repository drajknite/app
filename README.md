# ⚛️ React Full-Stack App

A full-stack React application featuring Vite, Express, JSON Server, and MongoDB.

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Start frontend and backend servers:

```bash
npm start
```


## 🛠️ Scripts 

Start frontend server only:

```bash
npm run frontend
```

Start Backend server only:

```bash
npm run backend
```

Start JSON Server only:

```bash
npm run json-server
```

---

## 🌐 Development URLs

- **Frontend**: [http://localhost:5001](http://localhost:5001)
- **Backend**: [http://localhost:5002](http://localhost:5002)
- **JSON Server**: [http://localhost:5003](http://localhost:5003)

## 🗄️ Database

- ✅ **Database**: `app` (MongoDB)
- ✅ **Collection**: `users`
- 🚀 **API Server**: Runs at [http://localhost:5002](http://localhost:5002)

### 🧪 Sample users

```json
[
  {
    "_id": "6820f80cbd834dde37bf93ee",
    "index": 0,
    "isActive": false,
    "balance": "$1,785.21",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "name": "Lara Ortega",
    "gender": "male",
    "company": "UXMOX",
    "email": "laraortega@uxmox.com",
    "phone": "+1 (806) 579-3949",
    "address": "921 Malta Street, Boykin, Ohio, 2474",
    "about": "Adipisicing laborum tempor duis."
  },
  {
    "_id": "6820f80cbd834dde37bf93ef",
    "index": 1,
    "isActive": true,
    "balance": "$1,533.43",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "name": "Harrison Horne",
    "gender": "male",
    "company": "COMVOY",
    "email": "harrisonhorne@comvoy.com",
    "phone": "+1 (975) 578-2320",
    "address": "595 Noel Avenue, Why, Utah, 3756",
    "about": "Ut proident laborum."
  }
]
```

### 📦 users schema

```json
{
  _id: ObjectId,            // MongoDB ObjectId
  index: Number,            // Integer
  isActive: Boolean,        // true / false
  balance: String,          // Currency as string (e.g., "$1,785.21")
  picture: String,          // Image URL
  age: Number,              // Integer
  name: String,             // Full name
  gender: String,           // "male" / "female"
  company: String,          // Company name
  email: String,            // Email address
  phone: String,            // Phone number
  address: String,          // Full address
  about: String             // Description / bio
}
```

---

## 🛠️ Features

- ⚡ **Vite** for fast frontend builds
- 🖥️ **Express** API server
- 📦 **JSON Server** for mock endpoints
- 🧹 **ESLint + Prettier** for code quality and formatting
