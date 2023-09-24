const mongoose= require('mongoose');
const dotenv=require('dotenv')
dotenv.config();
const mongodbUrl=process.env.mongoURI

mongoose.connect(mongodbUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
const db=mongoose.connection
db.once('open',()=>{
    console.log("Database connection established");
})
db.on('error',()=>{
    console.log('Database connection error');
})
module.exports=db;