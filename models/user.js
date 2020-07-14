require('dotenv').config();
const mongoose = require('mongoose');
///const config = require('config');
const db = require('../database/db');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    reg_date: {
        type: Date,
        default: Date.now
    }
});


const User = mongoose.model('User', UserSchema);
module.exports = User;
