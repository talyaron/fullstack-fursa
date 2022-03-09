
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
          console.log("user id is "+ userData)
          userId = userData;
 });
 socket.on("setOrgData", userData => {
    //When user creation on server is complete, retrieve and save data to local storage
          console.log("org id is "+ userData)
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