const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';
const uri = isProd ? process.env.MONGO_URI_ATLAS : process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v2,
});

let usersCollection;
let notesCollection;

async function connectToMongo() {
  try {
    await client.connect();
    const db = client.db('app');

    usersCollection = db.collection('users');
    notesCollection = db.collection('notes');

    console.log(`✅ Connected to MongoDB (${isProd ? 'Remote' : 'Local'})`);
    console.log(`✅ Using database: ${db.databaseName}`);
    console.log(`✅ Collections available: users, notes`);
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
}

function getUsersCollection() {
  if (!usersCollection) throw new Error('❌ DB not connected yet');
  return usersCollection;
}

function getNotesCollection() {
  if (!notesCollection) throw new Error('❌ DB not connected yet');
  return notesCollection;
}

module.exports = {
  connectToMongo,
  getUsersCollection,
  getNotesCollection,
};
