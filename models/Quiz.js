const mongoose = require("mongoose");
const Question = require("./Question");

const QuizSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  questions: [mongoose.ObjectId]
}, {collection: "quizzes"});

module.exports = QuizSchema;
