const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:String
});

//Create a new User model using User Schema
const User = mongoose.model('user',UserSchema);

module.exports = User;