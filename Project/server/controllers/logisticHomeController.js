const express = require('express');
const router = express.Router();
const LogisticHome = require('../models/logistic.model');
// const jwt = require('jsonwebtoken');

// function verifyToken(req, res, next) {
//     if (!req.headers.authorization) {
//         res.json({ message: "Unauthorized request", status: 401 })
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if (token === 'null') {
//         res.json({ message: "Unauthorized request", status: 401 })
//     }
//     let payload = jwt.verify(token, 'secret')
//     if (!payload) {
//         res.json({ message: "Unauthorized request", status: 401 })
//     }
//     req.userId = payload.subject
//     next();
// }

router.get('', async (req, res) => {
    const src = await LogisticHome.distinct("src")
    res.json({ messgae: "Source", status: 200, data: src })
})

router.get('/allData/des', async (req, res) => {
    const des = await LogisticHome.distinct("des")
    res.json({ messgae: "Destination", status: 200, data: des })
})

router.get('/:src/:des', (req, res) => {
    LogisticHome.find({ src: req.params.src, des: req.params.des }, (err, docs) => {
        if (err) { throw err }
        else if (docs == '') {
            res.json({ message: "No Service", status: 202 })
        } else {
            var length = Object.keys(docs[0].partner).length
            var x = [], y = []
            for (var i = 0; i < length - 1; i++) {
                x[i] = Math.ceil(Math.random() * 80)
                y[i] = Math.ceil(Math.random() * 1000)
            }
            res.json({ messgae: "data", status: 200, data: docs, x, y })
        }
    })
})

router.post('/addData', (req, res) => {
    var { src, des, partner } = req.body
    var newUser = new LogisticHome({ src, des, partner });
    newUser.save((err, doc) => {
        if (err) { throw err }
        else {
            res.json({ message: "Data inserted sucessfully", status: 200 })
        }
    })
})
module.exports = router;