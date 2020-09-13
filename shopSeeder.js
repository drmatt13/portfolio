const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load model
const Store = require('./models/Store');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Read JSON files
const items = JSON.parse(
    fs.readFileSync(`${__dirname}/data/products.json`, 'utf-8')
);
// console.log(fs.readFileSync(`${__dirname}/data/products.json`, 'utf-8'));

// Import into DB
const importData = async () => {
    try {
        await Store.create(items);

        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(error);
    }
}

// Delete Data
const deleteData = async () => {
    try {
        await Store.deleteMany();

        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(error);
    }
}

// overwrite Data
const overwriteData = async () => {
    try {
        await Store.deleteMany();
    } catch (error) {
        console.error(error);
    }
    try {
        await Store.create(items);
        console.log('Data Overwritten...'.cyan.inverse);
        process.exit();
    } catch (error) {
        console.error(error);
    }
}

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
} else if (process.argv[2] === '-o') {
    overwriteData();
}