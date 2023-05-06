
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('', (req, res) => {
  const { subject, email, msg } = req.body;

   // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service:'gmail',
    auth: {
      user: 'salonisinghrajput27017@gmail', // replace with your actual email address
      pass: 'Ravis9561@' // replace with your actual email password
    }
  });

    // setup email data with unicode symbols
  const mailOptions = {
    from: 'salonisinghrajput27017@gmail', // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: msg
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send(error);
    } else {
      console.log('Message sent: %s', info.messageId);
      res.send('Message sent successfully!');
    }
  });
});

module.exports = router;
