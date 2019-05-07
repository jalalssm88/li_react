const express = require('express');
const router = express.Router();

const Agency = require('../models/agencyModel');

router.post('/create',(req, res)=>{
    const newAgency = new Agency(req.body);
    newAgency.save().then(agency=> res.json(agency));
});

router.get('/list',(req, res)=>{
    Agency.find().then(agency=> res.json(agency));
});

module.exports = router;