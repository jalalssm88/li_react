const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaggedPhoneSchema = new Schema({
    phone_id:{
        type:String,
    },
    name:{
        type:String
    },
    address:{
        type:String
    },
    valid_upto:{
        type:Date
    }
});

module.exports = mongoose.model('tagged_phones', TaggedPhoneSchema);