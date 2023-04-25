const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
require("./models/db");
const logisticHomeController = require('./controllers/logisticHomeController');
const logisticLoginController = require('./controllers/logisticLoginController');
const logisticRegController = require('./controllers/logisticRegController');
const adminController = require('./controllers/adminController');
const pincodeController = require('./controllers/pincodeController')
const adminReg = require('./controllers/adminReg')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/signup', logisticRegController);
app.use('/signin', logisticLoginController);
app.use('/data', logisticHomeController);
app.use('/allData/src', logisticHomeController);
app.use('/', logisticHomeController);
app.use('/admin', adminController)
app.use('/', logisticHomeController)
app.use('', pincodeController);
app.use('addDatapincode',pincodeController)
app.use('/adminReg', adminReg)

app.listen(port, () => {
    console.log(`Server is running at port no. : ${port}`);
});