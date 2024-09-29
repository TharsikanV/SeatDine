//database connection

const mongoose = require('mongoose');

const connectDatabse=()=>{
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(con=>{
    console.log('Connected to MongoDB');
    mongoose.connection.on('disconnected', connectDatabse);
    mongoose.connection.on('error', (err)=>console.error(err));
    mongoose.connection.on('reconnected', ()=>console.log('Reconnected to MongoDB'));
    mongoose.connection.on('SIGINT', ()=>{
        

}