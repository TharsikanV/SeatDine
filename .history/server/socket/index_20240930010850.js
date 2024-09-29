const express=require('express');
const cookieParser=require('cookie-parser');
const socketIo=require('socket.io');
const http=require('http');

const app=express();
// Middleware to parse cookies

app.use(cookieParser());

//support for jsonnpm run

app.use(express.json());

const server=http.createServer(app);

const io=socketIo(server);

module.exports={
    app,
    server
};