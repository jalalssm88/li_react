const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

router.post('/create',(req, res)=>{
    const newUser = new User(req.body);
    newUser.save().then(user=> res.json(user));
});

router.get('/list',(req, res)=>{
    User.find().then(user=> res.json(user));
});

module.exports = router;