var http =require('http');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });

  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

http.createServer(function(req,res){
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.write(error);
          res.end();
        } else {
          res.write('Email sent: ' + info.response);
          res.end();
        }
      });
}).listen(9000);