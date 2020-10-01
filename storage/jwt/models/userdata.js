// create mongoose schema object
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 6,
        max: 255 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        min: 6,
        max: 255 
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        trim: true,
        min: 6,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// The collection for this DB is defined in the export
module.exports = mongoose.model('Users', UserSchema);