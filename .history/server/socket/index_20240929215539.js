const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const path = require('path');
const dotenv=require('dotenv');

// load environment variables from.env file

dotenv.config();

// Middleware to parse cookies

app.use(cookieParser());

//support for json

app.use(express.json());

// export application   to express  module  and configure

module.exports=app;