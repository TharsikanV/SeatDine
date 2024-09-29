//database connection

const mongoose = require('mongoose');

const connectDatabse=()=>{
  
mongoose.connect(process.env.DB_LOCAL_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(con=>{
    console.log(`MongoDB is connected to the host:${con.connection.host}`);
    
});

}
// export connectDatabse

module.exports = connectDatabse;