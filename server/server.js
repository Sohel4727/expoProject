const express = require("express");
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 5000;
const cors = require("cors");
const loginRouter = require('./routes/loginRoute.js');
const loginGetRouter = require('./routes/loginGetRoute.js');

// Apply middleware
app.use(express.json()); // Use built-in JSON parser middleware
app.use(express.urlencoded({extended:true})); // Use built-in JSON parser middleware
app.use(cors());

// Define routes
app.use('/login', loginRouter);
app.use('/', loginGetRouter);

app.listen(port, () => {
    console.log(`server started at port ${port}`);
});
