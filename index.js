const ngrok = require('ngrok');

const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//use the notes.js file to handle
//endpoints that start with notes
const notes = require("./routes/notes");
app.use("/notes", notes);

const portfolio = require("./routes/portfolio");
app.use("/portfolio", portfolio);

const shop = require("./routes/shop");
app.use("/shop", shop);

app.get("/", (req, res) => {
    // res.send('<a href="/notes">notes</a>');
    res.render(__dirname + "/views/Home");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    (async function() {
        const endPoint = await ngrok.connect(PORT);
        console.log(endPoint);
    })()
});