const mongoose = require('mongoose');

var logisticRegSchema = new mongoose.Schema( {
    userName: {
        type: String,
        required: "this field is required"
    },
    email: {
        type: String,
        required: "this field is required"
    },
    fullName: {
        type: String,
        required: "this field is required"
    },
    password: {
        type: String,
        required: "this field is required"
    }
});

var userModel = mongoose.model('LogisticRegistration', logisticRegSchema);
module.exports = userModel;