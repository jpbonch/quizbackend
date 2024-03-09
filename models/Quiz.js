const mongoose = require("mongoose");
const Question = require("./Question");

const QuizSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  image: String,
  questions: [mongoose.ObjectId]
}, {collection: "quizzes"});

module.exports = QuizSchema;
