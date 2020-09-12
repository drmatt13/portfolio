// replace `${i}` --> \`   \$   {i}   \`

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
{'comment': `create function to connect node 
application to MongoDB database`},
{'js': `const mongoose = require('mongoose');`},
{'js': `\n`},
{'comment': `<username> && <password> must be defined beforehand`},
{'comment': `<dbname> will be created if does not exist`},
{'js': `const URL = 'mongodb+srv://<username>:<password>@cluster0.ejwwm.mongodb.net/<dbname>?retryWrites=true&w=majority';

const connectDB = async () => {
    const conn = await mongoose.connect(URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    console.log(\`MongoDB Connected: \${conn.connection.host}\`);
}

module.exports = connectDB;`},
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
{'comment': `use previously made function from 
the other module to connect to database`},
{'js': `const connectDB = require('./module');
connectDB();`},
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
{'comment': `create mongoose schema object`},
{'js': `const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more then 50 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description can not be more then 500 characters']
    },
    slug: String
});`},
{'js': `\n`},
{'comment': `The collection for this DB is defined in the export`},
{'js': `module.exports = mongoose.model('Collection', Schema);`},
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
{'comment': `within the express router`},
{'js': `\n`},
{'comment': `import the model created above`},
{'js': `const Model = require('./route');

router
    .route('/')
    .get((req, res) => {
        Model.find()
        .then(data => {
            res.json({
                confirmation: 'success',
                'data': data
            });
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            });
        });
    })
    .post((req, res) => {
        Model.create(req.body)
        .then(data => {
            res.json({
                confirmation: 'success',
                'data': data
            });
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            });
        });
    });

router
    .route('/:id')
    .get((req, res) => {
        Model.findById(req.params.id)
        .then(data => {
            res.json({
                confirmation: 'success',
                'data': data
            });
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            });
        });
    })
    .put((req, res) => {
        Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(data => {
            res.json({
                confirmation: 'success',
                'data': data
            });
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            });
        });
    })
    .delete( async (req, res) => {
        try {
            const data = await Model.findOneAndDelete(req.params.id);
            if (!data) {
                return res.status(400).json({ success: false });
            }
            res.status(200).json({ success: true, data: {} });
        } catch (error) {
            res.status(400).json({ success: false });
        }
    });

module.exports = router;`},
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
{'comment': `seeder`},
{'js': `const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');`},
{'js': `\n`},
{'comment': `Load env vars`},
{'js': `dotenv.config({ path: './config/config.env' });`},
{'js': `\n`},
{'comment': `Load models`},
{'js': `const Model = require('./route');`},
{'js': `\n`},
{'comment': `Connect to DB`},
{'js': `mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});`},
{'js': `\n`},
{'comment': `Read JSON files`},
{'js': `const data = JSON.parse(
    fs.readFileSync(\`\${__dirname}/route\`, 'utf-8')
);`},
{'js': `\n`},
{'comment': `Import into DB`},
{'js': `const importData = async () => {
    try {
        await Model.create(data);
        console.log('Data Imported...');
        process.exit();
    } catch (error) {
        console.error(error);
    }
}`},
{'js': `\n`},
{'comment': `Delete Data`},
{'js': `const deleteData = async () => {
    try {
        await Model.deleteMany();
        console.log('Data Destroyed...');
        process.exit();
    } catch (error) {
        console.error(error);
    }
}

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}`},
{'js': `\n`}
        ],
        // output
        [
{'input': `node seeder.js -i`},
{'output': `Data Imported...`},
{'output': `\n`},
{'input': `node seeder.js -d`},
{'output': `Data Destroyed...`}
        ],
        //render
        {'render': false}
    ],

];