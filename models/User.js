const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  }
});

module.exports = UserSchema;