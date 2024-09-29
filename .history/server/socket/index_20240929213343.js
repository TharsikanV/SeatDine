const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');

// Middleware to parse cookies

app.use(cookieParser());

// Middleware to handle POST requests