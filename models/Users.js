const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
        min: 6,
        max: 255 
    },
    lname: {
        type: String,
        required: true,
        trim: true,
        min: 6,
        max: 255 
    },
    username: {
        type: String,
        required: true,
        unique: true,
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
    },
    verified: {
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Users', UserSchema);