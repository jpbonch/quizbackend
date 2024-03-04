const mongoose = require("mongoose");
const Question = require("./Question");

const QuizSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  question_ids: [Question]
});

module.exports = QuizSchema;