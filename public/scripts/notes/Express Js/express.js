const array = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `// initalize express js
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(\`server running on port \${PORT}\`);
});`}
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
{'js': `// Load env vars
dotenv.config({ path: './config/config.env' });

// Body-Parser middleware
app.use(express.json());

// Set directory for rendered pages to ./public
app.use(express.static(__dirname + '/public'));

// Set express view engine
app.set('view engine', 'ejs');`}
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
{'js': `// Route methods

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
});

// POST method route
Content-Type -> application/json for sending object data
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

// PUT method route
app.put('/', function (req, res) {
    res.send('PUT request to the homepage')
})

// DELETE method route
app.delete('/', function (req, res) {
    res.send('DELETE request to the homepage')
})`},
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
{'js': `// send object
res.status(200).json({ success: true, 'data': data });

// send html/text
res.status(200).send('<h1>hello</h1>');

// send template
res.status(200).render(__dirname + '/route');`},
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
{'js': `// middleware
function middleware(req, res, next) {
    console.log('middleware');
    next();
}

// global middleware
app.use(middleware());

 // middleware() -> app.get()
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
});

// create middleware
function auth(req, res, next) {
    if (req.query.id == '9sdf89sdfh') {
        next();
    } else {
        app.send('No auth');
    }
}

// middleware() -> auth() -> app.get()
app.get('/users', auth, (req, res) => {
    res.send('GET request to the homepage')
});`},
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
{'js': `// Export individual functions
exports.function1 = () => {
    console.log('function1');
};

exports.function2 = () => {
    console.log('function2');
};

// can also have imports at the bottom of the page
// exports.name1 = function1;
// exports.name2 = function2;

// default export
// module.exports = function;

// import by using destructuring to import only certain functions/classes
const { function1, function2: rename } = require('./route');`}
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
{'js': `// Express Router
const express = require('express');
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        res.send('<h1>get</h1>');
    })
    .post((req, res) => {
        res.send('<h1>post</h1>');
    })
    .put((req, res) => {
        res.send('<h1>put</h1>');
    })
    .delete((req, res) => {
        res.send('<h1>delete</h1>');
    });
    
module.exports = router;

// server.js
const routeTest = require('./route');
app.use('/route', routeTest);`}
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
{'js': `// Express Controllers

// @desc    Description
// @route   GET /route/route
// @access  Public
exports.controller1 = (req, res, next) => {
    promise()
    .then(data => {

    })
    .catch(error => {

    })
};

// @desc    Description
// @route   POST /route/route
// @access  Public
exports.controller2 = async (req, res, next) => {
    try {
        await promise();
    } catch (error) {

    }
};

// within routes
const {
    controller1,
    controller2
} = require('./route/controller');

router
    .route('/route')
    .get(controller1)
    .post(controller2);`},
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
{'js': `// error handling middleware
const errorHandler = (err, req, res, next) => {

    // Log to console for dev
    console.log(err.stack);

    res.status(500).json({
        success: false,
        error: err.message
    })
};

module.exports = errorHandler;

// within a controller
try {
    
} catch (error) {

    // res.status(400).json({
    //     success: false
    // });

    next(error);
}

// apply the error handler last within the server
app.use('/route', routeTest);
app.use(errorHandler);`},
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
{'js': `// NodeGeocoder

// initialize node-geocoder in a serparate module
const NodeGeocoder = require('node-geocoder');

const options = {
    provider: process.env.GEOCODER_PROVIDER,
    httpAdapter: 'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
}

const geocoder = NodeGeocoder(options);

module.exports = geocoder;

// within a controller
exports.controller = async (req, res) => {

    const { zipcode, distance } = req.params;

    const location = await geocoder.geocode(zipcode);
    const latitude = loc[0].latitude;
    const longitude = loc[0].longitude;

    console.log(location);
};

// within routes
const controller = require('./route/controller');

router
    .route('/route/:zipcode/:distance')
    .get(controller)`}
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
{'js': `// file system
const fs = require('fs');

// creates a file named data.txt in the 
servers root directory containing 'Hello World'
fs.writeFileSync('data.txt', 'Hello World');

// rename file in root directory
fs.renameSync('data1.txt', 'data2.txt');

// remove file in root directory
fs.unlinkSync('data1.txt', 'data2.txt');

// get all files in root directory and store in an array
// ['file1.txt', 'file2.js', 'file3.json', ...]
const dir = fs.readdirSync(__dirname);

// create new folder in root directory
fs.mkdirSync('new folder');

// load data
fs.readFile('./test.txt', function (err, data) {
    if (err) {
        throw err; 
    }
    console.log(Buffer.from(data).toString());
});

// listen for changes to file
fs.watchFile('new folder/data.txt', () => {
    console.log('data file was changed');
});`},
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
{'js': `// creates a secure Web URL for your localhost server

const ngrok = require('ngrok');

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
        ],
        // output
        [
{'output': `https://8b600fd107ab.ngrok.io`}
        ],
        //render
        {'render': false}
    ],
    
]