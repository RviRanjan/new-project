const mongoose = require('mongoose');

var pincodeDataSchema = new mongoose.Schema({
    pincode: String,
    partner:
    {
        partner1: String,
        partner2: String,
        partner3: String
    }
});

var pincodeModel = mongoose.model('pincodeData', pincodeDataSchema);
module.exports = pincodeModel;