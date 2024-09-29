// Import required modules

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {app} = require('./socket/index');
const connectDatabse=require('./config/database');

connectDatabse();
//listen on port
