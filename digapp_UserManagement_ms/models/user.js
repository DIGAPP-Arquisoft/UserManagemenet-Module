const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userID: Number,
    userName: String,
    password: String,
    telephone: Number,
    email: String,
    userPhoto: String,
    cities: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;