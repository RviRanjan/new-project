const express = require('express');
const router = express.Router();
const adminLogin = require('../models/adminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


router.post('', (req, res) => {
    var { userName, password } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { throw err }
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) { throw err }
            password = hash;
            var newUser = new adminLogin({ userName, password });
            newUser.save((err, doc) => {
                if (err) { console.log("Error in data storage"); }
                else {
                    res.json({ message: "Registration Succesfull", status: 200 });
                }
            });
        })
    })
});

module.exports = router;