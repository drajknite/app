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
*/

connectToMongo().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 API Server running at http://localhost:${PORT}`);
  });
});
