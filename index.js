const express = require("express");
const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');


const app = express();
const port = 3000;

const dbName = 'mydatabase';
const collectionName = 'test';

// lorem Set up mongoose connection
// mongoose.connect("mongodb://mymongo:27017/mydatabase", {});
// mongoose.connect(process.env.MONGO_URI, {});

// mongodb://test:test@localhost:27017/
// let mongoUrlK8s = `mongodb://test:test@localhost:27017/`
let mongoUrlK8s = `mongodb://${process.env.USER_NAME}:${process.env.USER_PWD}@${process.env.DB_URL}`

const EntrySchema = new mongoose.Schema({
    text: String,
    date: { type: Date, default: Date.now },
});

const Entry = mongoose.model("Entry", EntrySchema);

app.get("/", async (req, res) => {
    try {
        const entry = new Entry({ text: "This is an entry by polo" });
        await entry.save();
        res.send("Entry added! lorem ");
    } catch (err) {
        res.status(500).send("Error occurred");
    }
});

app.get("/test", async (req, res) => {
    try {
      // Connect to MongoDB
      const client = await MongoClient.connect(mongoUrlK8s, { useNewUrlParser: true, useUnifiedTopology: true });
      const db = client.db(dbName);
  
      // Create 'test' collection if it doesn't exist
      const collection = await db.createCollection(collectionName).catch(() => db.collection(collectionName));
  
      // Add a record to the 'test' collection
      const result = await collection.insertOne({ data: 'some data added' });
  
      // Respond with the inserted document
      res.json(result.insertedId);
  
      // Close the MongoDB connection
      client.close();
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
