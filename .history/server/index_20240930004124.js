// Import required modules

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = require('./socket/index');
const connectDatabse=require('./config/database');
const path = require('path');
const dotenv=require('dotenv');

// load environment variables from.env file

dotenv.config({path:path.join(__dirname,"config/config.env")});
// const app=express();

app.use(cors());
app.use(bodyParser.json());


//listen on port 8080
const port = process.env.PORT || 8080;

connectDatabse().then(()=> {
  const server=app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error(`Error connecting to MongoDB: ${err.message}`);
});




