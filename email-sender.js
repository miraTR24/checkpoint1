var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'email@gmail.com',
  to: 'recevierEmail@yahoo.com',
  subject: 'Subject',
  text: 'Text!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});