const express=require('express');
const cookieParser=require('cookie-parser');
const socketIo=require('socket-io');
const http=

const app=express();
// Middleware to parse cookies

app.use(cookieParser());

//support for json

app.use(express.json());

// export application   to express  module  and configure

module.exports=app;