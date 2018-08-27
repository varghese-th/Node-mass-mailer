// controller which sends the mail

var nodemailer = require('nodemailer');
var config = require('config');

module.exports = {
	
	sendingMail: function (req, res, next) {
	    let transporter = nodemailer.createTransport({
	        host: config.mail.host, // has to change while not using gmail eg: mail.companyname.com
	        port: 587,
	        secure: false, // true for 465, false for other ports
	        auth: {
	            user: config.mail.mainmail,
	            pass: config.mail.mainmailpass
	        },
	        tls: {
	        	rejectUnauthorized: false
	        } // tls is used while using a localhost
	    });

	    // setup email data with unicode symbols
	    let mailOptions = {
	        from: '"' + config.mail.mainname + '" <'+ config.mail.mainmail + '>', // sender address
	        bcc: mailToList, // list of receivers
	        subject: mailSubject,
	        text: mailText
	        // html: '<h3>Name: ' + req.body.mail_body
	    };

	    // send mail with defined transport object
	    transporter.sendMail(mailOptions, (error) => {
	        if (error) {
	            return console.log(error);
	        }
	        console.log('Mail sent');
	    });

	    next();
	}
}