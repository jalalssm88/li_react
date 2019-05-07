const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgencySchema = new Schema({
    name:{
        type:String
    },
    is_active:{
        type:Boolean,
    }
});

module.exports = mongoose.model('agencies', AgencySchema);