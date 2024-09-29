//database connection

const mongoose = require('mongoose');

const connectDatabse=()=>{
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

