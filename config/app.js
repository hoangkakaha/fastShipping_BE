const express = require('express');
require('dotenv').config();

// const SocketIO = require('socket.io');
global.Env = process.env;

const app = express();

app.use((req, res, next) => {
  console.log(`request at ${new Date()}`);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const http = require('http').Server(app);

http.listen(Env.PORT, () => {
  console.log(`Server run at port: ${Env.PORT}`);
});

const io = require('socket.io')(http, {
  pingTimeout: 30000,
  pingInterval: 60000
});

const Socket = require('../App/Controllers/Ws/SocketController');

Socket.SocketController(io);

module.exports = app;