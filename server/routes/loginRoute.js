// const express = require('express');
// const router=express.Router();

// const controller= require('../controller/loginController.js');

// router.post('/',controller);
// module.exports=router;

const express = require("express");
const router = express.Router();

// Import your login controller
const loginController = require("../controller/loginController.js");

// Define the POST route with a callback function
router.post("/", loginController);

module.exports = router;
