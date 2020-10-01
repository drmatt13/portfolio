const express = require("express");
const colors = require("colors");

const app = express();

const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

// connect to db
const connectDB = require('./config/db');
connectDB();

// import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

//body parser
app.use(express.json());

//Route middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('3000'.cyan));