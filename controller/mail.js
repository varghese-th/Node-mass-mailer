var nodemailer = require('nodemailer');

module.exports = {
	sendingMail: function (req, res, next) {
	    let transporter = nodemailer.createTransport({
	        host: 'smtp.gmail.com', // has to change while not using gmail eg: mail.companyname.com
	        port: 587,
	        secure: false, // true for 465, false for other ports
	        auth: {
	            user: 'joyalexaj19@gmail.com',
	            pass: 'hello@hello'
	        },
	        tls: {
	        	rejectUnauthorized: false
	        } // tls is used while using a localhost
	    });

	    // setup email data with unicode symbols
	    let mailOptions = {
	        from: '"Varghese" <joyalexaj19@gmail.com>', // sender address
	        to: 'vthomask96@gmail.com', // list of receivers
	        subject: 'New form',
	        // text: 'Hello world?',
	        html: '<h3>Name: ' + req.body.name
	    };

	    // send mail with defined transport object
	    transporter.sendMail(mailOptions, (error) => {
	        if (error) {
	            return console.log(error);
	        }
	        console.log('Message sent');
	    });

	    res.redirect('/mail')
	}
}