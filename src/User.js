const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type : String,
        validate : {
          validator : (name) => name.length > 2,
          message : 'Name must be greater than 2 characters'
        },
        required : [true,'Name is required']
    },
    postCount:Number
});

//Create a new User model using User Schema
const User = mongoose.model('user',UserSchema);

module.exports = User;