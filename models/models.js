let model = require("mongoose").model;

let SchemaUser = require("./User");
let SchemaQuestion = require("./Question");
let SchemaQuiz = require("./Quiz");

module.exports = {
  User: model("users", SchemaUser),
  Question: model("questions", SchemaQuestion),
  Quiz: model("quizzes", SchemaQuiz),
};