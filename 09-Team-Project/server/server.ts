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

const io = require('socket.io')(http)

io.of('/api/socket').on('connection', socket => {
    console.log('A user is connected');
    socket.on('message', ({ name, message }) => {
        io.emit('message', { name, message })
    })

    socket.on('disconnect', () => {
        console.log(`socket ${socket.id} disconnected`);
    })
})


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