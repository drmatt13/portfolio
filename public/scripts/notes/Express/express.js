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
            {'input': `node server.js`},
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
                {'comment': `Load env vars`},
                {'js': `dotenv.config({ path: './config/config.env' });`},
                {'js': `\n`},
                {'comment': `Body-Parser middleware`},
                {'js': `app.use(express.json());`},
                {'js': `\n`},
                {'comment': `Set directory for rendered pages to ./public`},
                {'js': `app.use(express.static(__dirname + '/public'));`},
                {'js': `\n`},
                {'comment': `Set express view engine`},
                {'js': `app.set('view engine', 'ejs');`},
                {'js': `\n`}
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
{'comment': `route methods`},
{'js': `\n`},
{'comment': `GET method route`},
{'js': `app.get('/', function (req, res) {
    res.send('GET request to the homepage')
});`},
{'js': `\n`},
{'comment': `POST method route
Content-Type -> application/json for sending object data`},
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
                {'comment': `send object`},
                {'js': `res.status(200).json({ success: true, 'data': data });`},
                {'js': `\n`},
                {'comment': `send html/text`},
                {'js': `res.status(200).send('<h1>hello</h1>');`},
                {'js': `\n`},
                {'comment': `send template`},
                {'js': `res.status(200).render(__dirname + '/route');`},
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
{'comment': `create middleware`},
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
{'js': `    res.send('GET request to the homepage')
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
            [],
            //css
            [],
            //js
            [
{'js': `\n`},
{'comment': `Export individual functions`},
{'js': `exports.function1 = () => {
    console.log('function1');
};

exports.function2 = () => {
    console.log('function2');
};`},
{'js': `\n`},
{'comment': `can also have imports at the bottom of the page
// exports.name1 = function1;
// exports.name2 = function2;

// default export
// module.exports = function;`},
{'js': `\n`},
{'comment': `import by using destructuring to import only certain functions/classes`},
{'js': `const { function1, function2: rename } = require('./route');`},
{'js': `\n`}
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
{'comment': `Express Router`},
{'js': `const express = require('express');
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        res.send('<h1>get</h1>);
    })
    .post((req, res) => {
        res.send('<h1>post</h1>);
    })
    .put((req, res) => {
        res.send('<h1>put</h1>);
    })
    .delete((req, res) => {
        res.send('<h1>delete</h1>);
    });
    
module.exports = router;`},
{'js': `\n`},
{'comment': `server.js`},
{'js': `const routeTest = require('./route');
app.use('/route', routeTest);`},
{'js': `\n`}
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
{'comment': `Express Controllers`},
{'js': `\n`},
{'comment': `@desc    Description
// @route   GET /route/route
// @access  Public`},
{'js': `exports.controller1 = (req, res, next) => {
    promise()
    .then(data => {

    })
    .catch(error => {

    })
};`},
{'js': `\n`},
{'comment': `@desc    Description
// @route   POST /route/route
// @access  Public`},
{'js': `exports.controller2 = async (req, res, next) => {
    try {
        await promise();
    } catch (error) {

    }
};`},
{'js': `\n`},
{'comment': `within routes`},
{'js': `const {
    controller1,
    controller2
} = require('./route/controller');

router
    .route('/route')
    .get(controller1)
    .post(controller2);`},
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
{'comment': `error handling middleware`},
{'js': `const errorHandler = (err, req, res, next) => {`},
{'js': `\n`},
{'comment':`    Log to console for dev`},
{'js': `    console.log(err.stack);

    res.status(500).json({
        success: false,
        error: err.message
    })
};

module.exports = errorHandler;`},
{'js': `\n`},
{'comment': `within a controller`},
// {'js': `\n`},
{'js': `try {
    
} catch (error) {`},
{'js': `\n`},
{'comment':`    res.status(400).json({
    //     success: false
    // });`},
{'js': `\n`},
{'js': `    next(error);
}`},
{'js': `\n`},
{'comment': `apply the error handler last within the server`},
{'js': `app.use('/route', routeTest);
app.use(errorHandler);`},
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
{'comment': `NodeGeocoder`},
{'js': `\n`},
{'comment': `initialize node-geocoder in a serparate module`},
{'js': `const NodeGeocoder = require('node-geocoder');

const options = {
    provider: process.env.GEOCODER_PROVIDER,
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
}

const geocoder = NodeGeocoder(options);

module.exports = geocoder;`},
{'js': `\n`},
{'comment': `within a controller`},
{'js': `exports.controller = async (req, res) => {

    const { zipcode, distance } = req.params;

    const location = await geocoder.geocode(zipcode);
    const latitude = loc[0].latitude;
    const longitude = loc[0].longitude;

    console.log(location);
};`},
{'js': `\n`},
{'comment': `within routes`},
{'js': `const controller = require('./route/controller');

router
    .route('/route/:zipcode/:distance')
    .get(controller)`},
{'js': `\n`}
            ],
            // output
            [
{'input': `fetch('/route/02199/100')`},
{'output': `[
    {
        formattedAddress: ', Boston, MA 02199, US',
        latitude: 42.347417,
        longitude: -71.082126,
        country: null,
        city: 'Boston',
        stateCode: 'MA',
        zipcode: '02199',
        streetName: '',
        streetNumber: null,
        countryCode: 'US',
        provider: 'mapquest'
    }
]`}
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