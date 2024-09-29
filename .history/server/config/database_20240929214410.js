//database connection

const mongoose = require('mongoose');

const connect
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});