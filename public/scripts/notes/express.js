const array = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `\n`},
{'comment': `initalize express js`},
{'js': `const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(\`server running on port \${PORT}\`);
});`},
{'js': `\n`},
        ],
        // output
        [
            {'output': `server running on port 3000`}
        ],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `\n`},
{'comment': `route methods`},
{'js': `\n`},
{'comment': `GET method route`},
{'js': `app.get('/', function (req, res) {
    res.send('GET request to the homepage')
});`},
{'js': `\n`},
{'comment': `POST method route`},
{'js': `app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})`},
{'js': `\n`},
{'comment': `PUT method route`},
{'js': `app.put('/', function (req, res) {
    res.send('PUT request to the homepage')
})`},
{'js': `\n`},
{'comment': `DELETE method route`},
{'js': `app.delete('/', function (req, res) {
    res.send('DELETE request to the homepage')
})`},
{'js': `\n`},
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `\n`},
{'comment': `middleware`},
{'js': `function middleware(req, res, next) {
    console.log('middleware');
    next();
}`},
{'js': `\n`},
{'comment': `global middleware`},
{'js': `app.use(middleware());`},
{'js': `\n`},
{'comment': `middleware() -> app.get() `},
{'js': `app.get('/', (req, res) => {
    res.send('GET request to the homepage')
});`},
{'js': `\n`},
{'comment': `middleware`},
{'js': `function auth(req, res, next) {
    if (req.query.id == '9sdf89sdfh') {
        next();
    } else {
        app.send('No auth');
    }
}`},
{'js': `\n`},
{'comment': `middleware() -> auth() -> app.get()`},
{'js': `app.get('/users', auth, (req, res) => {`},
{'comment': `console.log('middleware');`},
{'comment': `if url == '/users?id=9sdf89sdfh'`},
{'js': `res.send('GET request to the homepage')
});`},
{'js': `\n`},
        ],
        // output
        [],
        //render
        {'render': false}
    ],

        // card ----------------------------------------------------- >
    [
        //html
        [
{'html': `<h2>HTML Form</h2>
<form action="/route" method="POST">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    <input type="submit" value="Submit">
</form>
`},
        ],
        //css
        [],
        //js
        [
{'js': `\n`},
{'comment': `bodyparser is middleware that takes the incoming
req buffer and parses it into a json object which is 
needed to process incoming POST requests`},
{'js': `\n`},
{'comment': `bodyparser`},
{'js': `const bodyParser = require('body-parser');

app.use(bodyParser({ extended: true }));`},
{'js': `\n`},
{'js': `app.post('/route', (req, res) => {
    app.send(req.body);
});`},
{'js': `\n`},
        ],
        // output
        [],
        //render
        {'render': true}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `\n`},
{'comment': `file system`},
{'js': `const fs = require('fs');`},
{'js': `\n`},
{'comment': `creates a file named data.txt in the 
servers root directory containing 'Hello World'`},
{'js': `fs.writeFileSync('data.txt', 'Hello World');`},
{'js': `\n`},
{'comment': `rename file in root directory
fs.renameSync('data1.txt', 'data2.txt');`},
{'js': `\n`},
{'comment': `remove file in root directory
fs.unlinkSync('data1.txt', 'data2.txt');`},
{'js': `\n`},
{'comment': `get all files in root directory and store in an array`},
{'comment': `['file1.txt', 'file2.js', 'file3.json', ...]
const dir = fs.readdirSync(__dirname);`},
{'js': `\n`},
{'comment': `create new folder in root directory
fs.mkdirSync('new folder');`},
{'js': `\n`},
{'comment': `load data
fs.readFile('./test.txt', function (err, data) {
    if (err) {
        throw err; 
    }
    console.log(Buffer.from(data).toString());
});`},
{'js': `\n`},
{'comment': `listen for changes to file
fs.watchFile('new folder/data.txt', () => {
    console.log('data file was changed');
});`},
{'js': `\n`},
        ],
        // output
        [
{'output': `data.txt -> 'Hello World'`}
        ],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `\n`},
{'comment': `creates a secure Web URL for your localhost server`},
{'js': `\n`},
{'js': `const ngrok = require('ngrok');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(PORT, () => {
    (async function() {
        const endPoint = await ngrok.connect(PORT);
        console.log(endPoint);
    })()
});`},
{'js': `\n`},
        ],
        // output
        [
{'output': `https://8b600fd107ab.ngrok.io`}
        ],
        //render
        {'render': false}
    ],
    
]