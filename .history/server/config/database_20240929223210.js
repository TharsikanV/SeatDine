//database connection

const mongoose = require('mongoose');

const connectDatabse=()=>{
const uri = process.env.MONGO_URI;
mongoose.connect(, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(con=>{
    console.log(`MongoDB is connected to the host:${con.connection.host}`);
    
});

}
// export connectDatabse

module.exports = connectDatabse;