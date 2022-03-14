const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");

const http = require('http');
const cors = require('cors');

const server = http.createServer(app);
const socketIO = require("socket.io");

// app.use(express.static("../citizenClient/build"));
app.use(express.json());
app.use(cors())
require('dotenv').config();



mongoose.connect(`mongodb+srv://${process.env.ATLAS_NAME}:${process.env.CLUSTER_PASS}@cluster0.qqi5o.mongodb.net/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});






app.get('/', (req, res) => {
  res.send('Hello World!');
})

const accidentRouter = require('./routers/accidentRouter');
app.use('/accidents', accidentRouter);

const userRouter = require('./routers/userRouter');
app.use('/users', userRouter);

const previousAccidentRouter = require('./routers/previousAccidentsRouter');
app.use('/previousAccidents', previousAccidentRouter);


const messagesBetweemOrgRouter = require('./routers/messagesBetweemOrgRouter');
app.use('/messagesBetweemOrg', messagesBetweemOrgRouter);

server.listen(port, () => {
  console.log(`Listening on port ${port} 🔥`)
})




// saleem part
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
let interval;
let userId;
let orgId;
io.on("connection", (socket) => {
  console.log("new client join socket")
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
  socket.on('message', (value) => handleMessage(value));
  socket.on("setUserData", userData => {
    //When user creation on server is complete, retrieve and save data to local storage
    console.log("user id is " + JSON.stringify(userData))
    userId = userData;
  });
  socket.on("setOrgData", userData => {
    //When user creation on server is complete, retrieve and save data to local storage
    console.log("org id is " + userData)
    orgId = orgId
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};


function handleMessage(value: any) {
  console.log(value);
}
/* end of saleem */