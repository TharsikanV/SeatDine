// Import required modules

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const {app} = require('./socket/index');
const connectDatabse=require('./config/database');
const app=express();

app.use(cors());
app.use(bodyParser.json());


//listen on port 8080
const port = process.env.PORT || 8080;

connectDatabse().then
const server=app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



