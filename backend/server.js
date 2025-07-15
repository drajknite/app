const express = require('express');
const dotenv = require('dotenv');
const {
  connectToMongo,
  getNotesCollection,
  getUsersCollection,
} = require('./config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

/* MongoDB connection details:
Db name: app
Collections: users, notes
use functions getUsersCollection() or getNotesCollection() to access collections
sample users
[
    {
      "index": 0,
      "email": "goldie_weber@marketoid.mortgage",
      "username": "goldie01",
      "name": "Goldie Weber",
      "firstName": "Bass",
      "lastName": "Nelson",
      "company": "Marketoid",
      "dob": "2001-10-29",
      "address": "72 Keen Court, Broadlands, Montana",
      "password": "",
      "isActive": true
    }
]
*/

connectToMongo().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 API Server running at http://localhost:${PORT}`);
  });
});
