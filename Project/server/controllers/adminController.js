const express = require('express');
const router = express.Router();
const adminLogin = require('../models/adminModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('', (req, res) => {
    //var { userName, password } = req.body;
    var userName = req.body.userName;
    var password = req.body.password;
    adminLogin.findOne({ userName }, (err, docs) => {
        console.log(docs);
        if (err) { throw err; }
        
        else if (!docs) {
            res.json({ message: "No such user exist", status: 401 });
        } else {
            bcrypt.compare(password, docs.password, (err, ans) => {
                if (err) { throw err }
                else if (ans) {
                    let payload = { subject: docs._id }
                    let token = jwt.sign(payload, 'secretKey')
                    res.json({ message: "Login Succesfull", status: 200, user: docs, token });
                } else {
                    res.json({ message: "password not match", status: 401 })
                }
            })
        }
    })
})

module.exports = router;
