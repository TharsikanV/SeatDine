// Import required modules

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {app} = require('./socket/index');
const connectDatabse=require('./config/database');

app.use(cors());
app.use(bodyParser.json());

connectDatabse();
//listen on port 8080
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



