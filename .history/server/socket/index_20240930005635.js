const express=require('express');
const cookieParser=require('cookie-parser');
const socketIo=require('socket-io');
const http=require('http');

const app=express();
// Middleware to parse cookies

app.use(cookieParser());

//support for json

app.use(express.json());



module.exports=app;