const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
//dotenv

// Middleware to parse cookies

app.use(cookieParser());

//support for json

app.use(express.json());