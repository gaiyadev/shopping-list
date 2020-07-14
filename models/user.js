require('dotenv').config();
const mongoose = require('mongoose');
///const config = require('config');
const db = require('../database/db');
const bcrypt = require('bcrypt');


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


module.exports.newUser = (newUser, callback) => {
    bcrypt.hash(newUser.password, 10, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;  //set hash password
        newUser.save(callback); //create New User
    });
}


// Compare Curent password and new password of user
module.exports.comparePassword = async (password, hash, callback) => {
    await bcrypt.compare(password, hash, (err, isMatch) => {
        if (err) throw err;
        return callback(null, isMatch);
    })
}
