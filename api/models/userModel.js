const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_name:{
        type:String
    },
    password:{
        type:String,
    },
    first_name:{
        type:String,
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
    },
    active:{
        type:Boolean,
    },
    agency:{
        type:String
    }
});

module.exports = mongoose.model('users', UserSchema);