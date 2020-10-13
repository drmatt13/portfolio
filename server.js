const express = require("express");
const dotenv = require('dotenv');
const colors = require( 'colors');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
if (!process.env.OFFLINE) {
    const connectDB = require('./config/db');
    connectDB();
}

// Body Parser
app.use(express.json());

// allow html form data to be parsed in req.body
app.use(express.urlencoded({ extended: false }));

// cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const apps = require("./routes/apps");
app.use("/apps", apps);

const notes = require("./routes/notes");
app.use("/notes", notes);

const bcrypt_jwt_auth = require("./routes/bcrypt_jwt_auth");
app.use("/bcrypt_jwt_auth", bcrypt_jwt_auth);

const shop = require("./routes/shop");
app.use("/shop", shop);

app.get("/", (req, res) => {
    res.render(__dirname + "/views/home");
});



const PORT = process.env.PORT || 3000;

const ngrok = require('ngrok');
app.listen(PORT, () => {
    if (false) {
        (async function() {
            const endPoint = await ngrok.connect(PORT);
            console.log(endPoint.yellow);
        })()
    } else {
        console.log(`server listening on port ${PORT}`.yellow);
    }
});