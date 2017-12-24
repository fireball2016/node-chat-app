const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage} = require('./utils/message');

const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

socket.emit('newMessage', generateMessage('admin', 'welcome to chat app!'));

socket.broadcast.emit('newMessage', generateMessage('admin', 'new user joined'));

socket.on('createMessage', (message, callback) => {
  console.log('createMessage', message);
  io.emit('newMessage', generateMessage(message.from, message.text));
  callback();
});

socket.on('createLocationMessage', (coords) => {
  io.emit('newLocationMessage', generateLocationMessage('admin', coords.latitude, coords.longitude));
});

socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});



server.listen(port, () => {
  console.log(`server started up at port ${port}`);
});
