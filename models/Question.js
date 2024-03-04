const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  body: {
    text: {
      type: String,
    },
    options: {
      a: {
        type: String,
      },
      b: {
        type: String,
      },
      c: {
        type: String,
      },
      d: {
        type: String,
      },
    },
    correct: {
      type: String,
    },
  },
});

module.exports = QuestionSchema;
