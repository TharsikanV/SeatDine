const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
o

// Middleware to parse cookies

app.use(cookieParser());

//support for json

app.use(express.json());