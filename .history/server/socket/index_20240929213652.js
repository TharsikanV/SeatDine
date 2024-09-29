const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');

// Middleware to parse cookies

app.use(cookieParser());

//support for json

app.use(express.json());
// export application   to express  module  and 