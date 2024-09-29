//database connection

const mongoose = require('mongoose');

async function connectDatabse(){

const uri = process.env.DB_LOCAL_URI;
await mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(con=>{
    console.log(`MongoDB is connected to the host:${con.connection.host}`);
    
});

}
// export connectDatabse

module.exports = connectDatabse;