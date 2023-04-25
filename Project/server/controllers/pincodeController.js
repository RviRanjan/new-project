const express = require('express');
const router = express.Router();
const PincodeModel = require('../models/pincodeModel');


router.post('/pincode', (req, res) => {
    var pincode = req.body.pincode
    PincodeModel.findOne({ pincode }, (err, docs) => {
        if (err) { throw err; }
        else if (!docs) {
            res.json({ message: "No such pincode exist", status: 201 });
        } else {
            res.json({ message: "pincode Match", status: 200, pincodeData: docs });
        }
    })
})


router.post('/addDatapincode', (req, res) => {
    var { pincode,partner } = req.body
    var newUser = new PincodeModel({ pincode, partner });
    newUser.save((err, doc) => {
        if (err) { throw err }
        else {
            res.json({ message: "Data inserted sucessfully", status: 200 })
        }
    })
})

module.exports = router;