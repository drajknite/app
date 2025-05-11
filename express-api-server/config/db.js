const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';
const uri = isProd ? process.env.MONGO_URI_ATLAS : process.env.MONGO_URI_LOCAL;

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v2,
});

let profileCollection;

async function connectToMongo() {
  try {
    await client.connect();
    const db = client.db('app');
    profileCollection = db.collection('users');
    console.log(`✅ Connected to MongoDB (${isProd ? 'Atlas' : 'Local'})`);
    console.log(`✅ Using database: ${db.databaseName}`);
    console.log(`✅ Using collection: ${profileCollection.collectionName}`);
    console.log(
      `✅ Use userCollection() to access the collection in your code.`
    );
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
}

function userCollection() {
  if (!profileCollection) throw new Error('❌ DB not connected yet');
  return profileCollection;
}

module.exports = { connectToMongo, userCollection };
