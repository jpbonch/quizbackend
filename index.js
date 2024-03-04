const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const port = 4000;
const mongoose = require('mongoose');
const { Quiz, Question, User } = require("./models/models");

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/quizzes", async (req, res) => {
  const allQuizzes = await Quiz.find();
  return res.status(200).json(allQuizzes);
});


const start = async () => {
  try {
    await mongoose.connect(
      process.env.ATLAS_URI
    );
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();