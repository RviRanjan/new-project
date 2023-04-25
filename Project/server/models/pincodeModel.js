const mongoose = require('mongoose');

var pincodeDataSchema = new mongoose.Schema({
    pincode: String,
    partner:Array
});

var pincodeModel = mongoose.model('pincodeData', pincodeDataSchema);
module.exports = pincodeModel;