const express = require('express');
const dotenv = require('dotenv');
const { connectToMongo, userCollection } = require('./config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5002;

/**
 * Connects to the MongoDB database and initializes the application.
 *
 * The `userCollection` function retrieves the `profiles` collection from the `app` database.
 *
 * Database Name: `app`
 * Collection Name: `profiles`
 *
 * The `connectToMongo` function establishes a connection to the MongoDB database.
 *  
 * Example Document Structure in the `profiles` collection:
 *     {
        "_id": "6820ff18bd834dde37bf9404",
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
        "about": "Adipisicing elit magna.\r\n"
    }
 *
 */

connectToMongo().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 API Server running at http://localhost:${PORT}`);
  });
});
