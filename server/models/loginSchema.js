const mongoose = require("mongoose");
require("./connection");
const loginSchema = mongoose.Schema({
    email: String,
    password: String,
});


const loginModel = new mongoose.model("login", loginSchema);
module.exports = loginModel;
