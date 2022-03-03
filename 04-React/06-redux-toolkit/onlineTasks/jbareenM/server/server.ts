const express = require('express');
const app = express();
const port = 3001;
const http = require('http');
const cors = require('cors');

const server = http.createServer(app);
const socketIO = require("socket.io");

require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ response: "I am On" }).status(200);
})


// const io = socketIO(server, {
//     transports: ['polling'],
//     cors: {
//         cors: {
//             origin: "http://localhost:3000"
//         }
//     }
// })

const io = require('socket.io')(http)

io.on('connection', socket => {
    socket.on('message', ({ name, message }) => {
        io.emit('message', { name, message })
    })
})

// io.of('/api/socket').on('connection', (socket: any) => {
//     console.log('A user is connected');

//     socket.on('chatMessage', (message) => {
//         console.log(`message from ${socket.id} : ${message}`);
//         // socket.send({ ok: true })
//         io.emit('chatMessage', { socket: message });
//     });


//     socket.on("update item", (arg1, callback) => {
//         console.log(arg1); // 1
//         callback({
//             status: "ok"
//         });
//     });

//     socket.on('disconnect', () => {
//         console.log(`socket ${socket.id} disconnected`);
//     })
// })

// io.on('connection', (socket: any) => {
//     console.log('A user is connected');

//     socket.on('chatMessage', (message: any) => {
//         console.log(`message from ${socket.id} : ${message}`);
//         // socket.send({ ok: true })
//         io.emit({ ok: false });
//     });

//     socket.on('disconnect', () => {
//         console.log(`socket ${socket.id} disconnected`);
//     })
// })

app.use(express.json())
app.use(cors())

server.listen(port, () => console.log(`Listening on port ${port}`));

// app.listen(port, () => {
//     console.log(`app listen to port ${port}`);
// })