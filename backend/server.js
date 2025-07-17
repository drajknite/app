const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const {
  connectToMongo,
  getNotesCollection,
  getUsersCollection,
} = require('./config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

/* MongoDB connection details:
Db name: app
Collections: users, notes
use functions getUsersCollection() or getNotesCollection() to access collections
sample users
[
    {
      "index": 0,
      "email": "elvia_lambert@acrodance.gal",
      "username": "elvia88",
      "name": "Elvia Lambert",
      "firstName": "Weber",
      "lastName": "Moody",
      "company": "Acrodance",
      "dob": "1988-08-04",
      "age": 43,
      "address": "94 Seagate Terrace, Woodruff, Iowa",
      "about": "Laboris excepteur eu reprehenderit laboris nisi sit. Irure dolore nisi pariatur ad laboris aliquip officia.",
      "password": "",
      "roles": ["member", "admin"],
      "isActive": true,
      "createdAt": "2014-09-02T00:51:39.191Z",
      "updatedAt": "2014-09-03T00:51:39.191Z"
    }
]
*/

app.get('/', (req, res) => {
  res.send('Welcome to the API Server!');
});
app.get('/api/notes', async (req, res) => {
  try {
    const notesCollection = getNotesCollection();
    const notes = await notesCollection.find({}).toArray();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
});
app.get('/api/users', async (req, res) => {
  try {
    const usersCollection = getUsersCollection();
    const users = await usersCollection.find({}).toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});
app.post('/api/notes', async (req, res) => {
  try {
    const notesCollection = getNotesCollection();
    const newNote = req.body;
    const result = await notesCollection.insertOne(newNote);
    res.status(201).json(result.ops[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create note' });
  }
});
app.post('/api/users', async (req, res) => {
  try {
    const usersCollection = getUsersCollection();
    const newUser = req.body;
    const result = await usersCollection.insertOne(newUser);
    res.status(201).json(result);
    console.log('User created:', result.ops[0]);
    console.log('New user data:', newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
    console.error('Error creating user:', error);
  }
});
app.put('/api/notes/:id', async (req, res) => {
  try {
    const notesCollection = getNotesCollection();
    const noteId = req.params.id;
    const updatedNote = req.body;
    const result = await notesCollection.updateOne(
      { _id: new require('mongodb').ObjectId(noteId) },
      { $set: updatedNote }
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update note' });
  }
});
app.put('/api/users/:id', async (req, res) => {
  try {
    const usersCollection = getUsersCollection();
    const userId = req.params.id;
    const updatedUser = req.body;
    const result = await usersCollection.updateOne(
      { _id: new require('mongodb').ObjectId(userId) },
      { $set: updatedUser }
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const notesCollection = getNotesCollection();
    const noteId = req.params.id;
    const result = await notesCollection.deleteOne({
      _id: new require('mongodb').ObjectId(noteId),
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
});
app.delete('/api/users/:id', async (req, res) => {
  try {
    const usersCollection = getUsersCollection();
    const userId = req.params.id;
    const result = await usersCollection.deleteOne({
      _id: new require('mongodb').ObjectId(userId),
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

connectToMongo().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 API Server running at http://localhost:${PORT}`);
  });
});
