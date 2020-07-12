require('dotenv').config();
const mongoose = require('mongoose');
///const config = require('config');
const db = require('../database/db');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const Item = mongoose.model('Items', ItemSchema);
module.exports = Item;
