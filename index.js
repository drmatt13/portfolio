const express = require("express");
const dotenv = require('dotenv');
const colors = require( 'colors');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
const connectDB = require('./config/db');
connectDB();

// Body Parser
app.use(express.json());

//use the notes.js file to handle
//endpoints that start with notes
const notes = require("./routes/notes");
app.use("/notes", notes);

const portfolio = require("./routes/portfolio");
app.use("/portfolio", portfolio);

const passport = require("./routes/passport");
app.use("/passport", passport);

const shop = require("./routes/shop");
app.use("/shop", shop);

app.get("/", (req, res) => {
    // res.send('<a href="/notes">notes</a>');
    res.render(__dirname + "/views/Home");
});

const PORT = process.env.PORT || 3000;

const ngrok = require('ngrok');
app.listen(PORT, () => {
    (async function() {
        const endPoint = await ngrok.connect(PORT);
        console.log(endPoint.yellow);
    })()
    // console.log('3000');
});