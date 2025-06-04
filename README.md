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

---

## 🌐 Development URLs

- **Frontend**: [http://localhost:5001](http://localhost:5001)
- **Backend**: [http://localhost:5000](http://localhost:5000)
- **JSON Server**: [http://localhost:5002](http://localhost:5002)

## 🗄️ Database

- ✅ **Database**: `app` (MongoDB)
- ✅ **Collection**: `users`
- 🚀 **API Server**: Runs at [http://localhost:5000](http://localhost:5000)

### 🧪 Sample users

```json
[
  {
    "index": 0,
    "email": "marian_haney@isologica.men",
    "username": "marian89",
    "name": "Marian Haney",
    "firstName": "Elma",
    "lastName": "Hughes",
    "company": "Isologica",
    "dob": "1989-08-18",
    "address": "31 Powell Street, Stouchsburg, Iowa",
    "about": "Eu sunt labore nisi pariatur reprehenderit. Ad aliquip sunt est consectetur pariatur magna enim.",
    "password": "dolor",
    "roles": ["admin", "guest"],
    "createdAt": "2013-12-20T07:15:58.326Z",
    "updatedAt": "2013-12-21T07:15:58.326Z"
  },
  {
    "index": 1,
    "email": "madge_schmidt@gaptec.school",
    "username": "madge95",
    "name": "Madge Schmidt",
    "firstName": "Sharpe",
    "lastName": "Taylor",
    "company": "Gaptec",
    "dob": "1995-02-07",
    "address": "99 Bushwick Avenue, Seymour, Tennessee",
    "about": "Irure excepteur sint consectetur aute dolore veniam. Incididunt sint enim duis commodo proident irure incididunt nisi exercitation nostrud velit pariatur ea.",
    "password": "labore",
    "roles": ["guest", "admin"],
    "createdAt": "2014-02-01T04:16:57.453Z",
    "updatedAt": "2014-02-02T04:16:57.453Z"
  }
]
```

---

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

Format code:

```bash
npm run format
```

Lint code:

```bash
npm run lint
```

---

## 🛠️ Features

- ⚡ **Vite** for fast frontend builds
- 🖥️ **Express** API server
- 📦 **JSON Server** for mock endpoints
- 🧹 **ESLint + Prettier** for code quality and formatting
