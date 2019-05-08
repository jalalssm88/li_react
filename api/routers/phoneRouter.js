const express = require('express');
const router = express.Router();

const Phone = require('../models/phoneModel');

router.post('/create',(req, res)=>{
    const newPhone = new Phone(req.body);
    newPhone.save().then(phone=> res.json(phone));
});

router.get('/list',(req, res)=>{
    Phone.find().then(phone=> res.json(phone));
});

// router.get('/tagged/:phon', (req, res)=>{
//     const phone_num = req.params.phon;
//     Phone.findOne({"phone_no": phone_num}, function(err, document) {
//         console.log(document.name);
//         res.json({"status":"success"})
//       });
// })

router.get('/tagged/:phon', (req, res, next)=> {
    const phone_num = req.params.phon;
    Phone.find({"phone_no": phone_num}).exec().then(doc =>{
        console.log(doc)
        if(doc.length > 0){
            res.status(200).json({"status":"success", "phone_no":doc})
        }else{
            res.status(200).json({"status":"failed"})
        }
    }).catch(error =>{
        res.status(505).json({error:error})
    }) 
})

module.exports = router;