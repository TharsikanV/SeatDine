const express=require('express');
const cookieParser=require('cookie-parser');
const {Server}=require('socket.io');
const http=require('http');

const app=express();
// Middleware to parse cookies

app.use(cookieParser());

//support for json

app.use(express.json());

const server=http.createServer(app);

const io=new Server(server);

module.exports={
    app,
    server
};