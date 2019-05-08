const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhoneSchema = new Schema({
    phone_no:{
        type:Number
    },
});

module.exports = mongoose.model('phones', PhoneSchema);