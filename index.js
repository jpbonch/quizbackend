const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
const MongoClient = require("mongodb");
// test comment
app.get("/", (req, res) => {
  res.send("t is working");
});

app.get("/quizzes", async (req, res) => {
  const connectionString = process.env.ATLAS_URI || "";
  const client = new MongoClient(connectionString);
  let conn;
  try {
    conn = await client.connect();
  } catch (e) {
    console.error(e);
  }
  let db = conn.db("quizapp");
  let collection = await db.collection("quizzes");
  let results = await collection.find({}).limit(50).toArray();
  res.send(results).status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
