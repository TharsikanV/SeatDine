//database connection

const mongoose = require('mongoose');

const connectData
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});