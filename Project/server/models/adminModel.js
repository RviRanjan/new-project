const mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: "this field is required"
    },
    password: {
        type: String,
        required: "this field is required"
    }
});

var adminLogin = mongoose.model('adminLogin', adminSchema);
module.exports = adminLogin;