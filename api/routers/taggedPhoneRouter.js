const express = require('express');
const router = express.Router();

const TaggedPhone = require('../models/taggedPhoneModel');

router.post('/create',(req, res)=>{
    const newTagged = new TaggedPhone(req.body);
    newTagged.save().then(tagged=> res.json(tagged));
});

router.get('/list',(req, res)=>{
    TaggedPhone.find().then(tagged=> res.json(tagged));
});

module.exports = router;