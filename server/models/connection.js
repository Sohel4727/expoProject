const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/foodNinja');
const db=mongoose.connection;
db.once('open',()=>{
    console.log("Database connection established");
})
db.on('error',()=>{
    console.log('Database connection error');
})
module.exports=db;