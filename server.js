const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://jalal:jalal4488@react-li-shard-00-00-qdiya.mongodb.net:27017,react-li-shard-00-01-qdiya.mongodb.net:27017,react-li-shard-00-02-qdiya.mongodb.net:27017/test?ssl=true&replicaSet=react-li-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser:true}, ()=>{
    console.log('connected to mongo db');
});

app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

const Agency = require('./api/routers/agencyRouter');
const User = require('./api/routers/userRouter');
const Phone = require('./api/routers/phoneRouter');
const Tagged = require('./api/routers/taggedPhoneRouter');

app.use('/agency', Agency);
app.use('/user', User);
app.use('/phone', Phone);
app.use('/tagged', Tagged)


const port = 4000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});