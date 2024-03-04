const express = require("express");
require("dotenv").config();
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json());
const http = require('http');
const server = http.createServer(app);
const mongoose = require('mongoose');
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }
});



const { Quiz, Question, User } = require("./models/models");

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/quizzes", async (req, res) => {
  const allQuizzes = await Quiz.find();
  return res.status(200).json(allQuizzes);
});

let lastsocket;
let playerCount = 0;
let rooms = 0;
io.on('connection', (socket) => {
  console.log('a user connected');
  playerCount++;
  if (playerCount == 2) {
    socket.join("room" + rooms);
    lastsocket.join("room" + rooms);
    io.to("room" + rooms).emit("found");
    rooms++;
    playerCount = 0;
  }
  lastsocket = socket;
});


const start = async () => {
  try {
    await mongoose.connect(
      process.env.ATLAS_URI
    );
    server.listen(4000, () => console.log("Server started on port 4000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();