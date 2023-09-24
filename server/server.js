const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8080;
const cors = require("cors");
const loginRouter = require('./routes/loginRoute.js');
const loginGetRouter = require('./routes/loginGetRoute.js');
const authRoutes = require('./routes/authRoute.js');
const protectedRoutes = require('./routes/protectedRoute.js');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware'); // Import http-proxy-middleware

// ... (other middleware and route definitions)

// Use CORS middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Define routes
app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);
app.use('/login', loginRouter);
app.use('/', loginGetRouter);

// Create a proxy for your API requests
// app.use('/api', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
