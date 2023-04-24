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

module.exports = router;