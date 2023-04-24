const mongoose = require('mongoose');

var logisticDataSchema = new mongoose.Schema({
    src: String,
    des: String,
    partner:
    {
        partner1: String,
        partner2: String,
        partner3: String
    }
});

var dataModel = mongoose.model('logisticData', logisticDataSchema);
module.exports = dataModel;