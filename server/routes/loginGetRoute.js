const express = require('express');
const router = express.Router();
const controller=require('../controller/loginGetController.js');
router.get('/',controller);
module.exports=router;