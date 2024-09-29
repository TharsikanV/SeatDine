const express=require('express');
const cookieParser=require('cookie-parser');
const socketIo=require('socket.io');
const http=require('http');

const app=express();
// Middleware to parse cookies

app.use(cookieParser());

//support for json

app.use(express.json());

const server=http.createServer(app);

const io=socketIo(server);

io.on('connection', async (socket) => {
    console.log('A user connected');
  
    // Handle incoming messages
    socket.on('message', (message) => {
      console.log('Received message:', message);
      // Broadcast the message to all connected clients
      io.emit('message', message);
    });
  
    // Handle disconnections
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
});

const auth=require



module.exports={
    app,
    server
};