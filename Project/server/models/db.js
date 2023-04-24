const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/myDatabase", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (!err) { console.log("database Connected"); }
    else { console.log("Error in Db connection : " + err); }
});

require('./logistic_reg.model');
require('./logistic.model');
require('./adminModel');
require('./pincodeModel');
