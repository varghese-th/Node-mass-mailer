// controller which sends the mail

var nodemailer = require('nodemailer');
var config = require('config');

module.exports = {
	
	// sendingMail: function (req, res, next) {
	//     let transporter = nodemailer.createTransport({
	//         host: config.mail.host, // has to change while not using gmail eg: mail.companyname.com
	//         port: 587,
	//         secure: false, // true for 465, false for other ports
	//         auth: {
	//             user: config.mail.mainmail,
	//             pass: config.mail.mainmailpass
	//         },
	//         tls: {
	//         	rejectUnauthorized: false
	//         } // tls is used while using a localhost
	//     });

	//     // setup email data with unicode symbols
	//     let mailOptions = {
	//         from: '"' + config.mail.mainname + '" <'+ config.mail.mainmail + '>', // sender address
	//         bcc: mailToList, // list of receivers
	//         subject: mailSubject,
	//         text: mailText
	//         // html: '<h3>Name:</h3> ' + req.body.mail_body
	//     };

	//     // send mail with defined transport object
	//     transporter.sendMail(mailOptions, (error) => {
	//         if (error) {
	//             return console.log(error);
	//         }
	//         console.log('Mail sent to ' + mailToList.length + ' contact(s)');
	//     });

	//     next();
	// }

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

	    let success_array = [];

	    for (var i=0; i<=(mailToList.length-1); i++) {

		    // setup email data with unicode symbols
		    let mailOptions = {
		        from: '"' + config.mail.mainname + '" <'+ config.mail.mainmail + '>', // sender address
		        to: mailToList[i], // list of receivers
		        subject: mailSubject,
		        // text: mailText
		        html: '<h3>Name:</h3> <span>' + mailToListName[i] + '</span>'
		    };

		    // send mail with defined transport object
		    transporter.sendMail(mailOptions, (error, info) => {
		        if (error) {
		            return console.log(error);
		        }
		        else {
		        	success_array.push(mailOptions.to);
		        	console.log('Mail sent to (' + success_array.length + '/' + mailToList.length + ') contacts(s)');
		        }
		    });

		}

	    next();
	}


}