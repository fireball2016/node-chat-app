const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'mike',
    text: 'seeee ya!',
    createdAt: 123123
  });

socket.on('createMessage', (message) => {
  console.log('createMessage', message);
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
