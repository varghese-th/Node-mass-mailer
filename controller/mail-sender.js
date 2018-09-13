// controller which sends the mail

var nodemailer = require('nodemailer');
var config = require('config');

module.exports = {
	
	// initial sending function
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

	
	// sending function with for loop(main)
	// sendingMail: function (req, res, next) {
	   
	//     let transporter = nodemailer.createTransport(config.authenticationMail);

	// 	let successMailArray = [];
	// 	mailToListLoop = 0;

	//     for (var mailToListLoop=0; mailToListLoop<=(mailToList.length-1); mailToListLoop++) {

	// 	    // setup email data with unicode symbols
	// 	    let mailOptions = {
	// 	        from: '"' + config.mail.mainname + '" <'+ config.mail.mainmail + '>', // sender address
	// 	        to: mailToList[mailToListLoop].mailid, // list of receivers
	// 	        subject: mailSubject,
	// 	        // text: mailText
	// 	        html: '<strong>' + mailSalutation + ' ' + mailToList[mailToListLoop].name + '</strong>,<br><pre>' + mailBody + '<pre>'
	// 	    };

	// 	    // send mail with defined transport object
	// 	    transporter.sendMail(mailOptions, (error, info) => {
	// 	        if (error) {
	// 	            return console.log(error);
	// 	        }
	// 	        else {
	// 	        	successMailArray.push(mailOptions.to);
	// 	        	console.log('Mail sent to (' + successMailArray.length + '/' + mailToList.length + ') contacts(s)');
	// 	        }
	// 	    });

	// 	}

	// 	next();
	// }


	// sending function with for loop(main)
	sendingMail: function (req, res, next) {
	   
	    let transporter = nodemailer.createTransport(config.authenticationMail);

		let successMailArray = [];
		let mailToListLoop = 0;


		function toMailFunction() 
		{
			// let successMailArray = [];
			return new Promise( resolve =>	{  

		    // setup email data with unicode symbols
		    let mailOptions = {
		        from: '"' + config.mail.mainname + '" <'+ config.mail.mainmail + '>', // sender address
		        to: mailToList[mailToListLoop].mailid, // list of receivers
		        subject: mailSubject,
		        // text: mailText
		        html: '<strong>' + mailSalutation + ' ' + mailToList[mailToListLoop].name + '</strong>,<br><pre>' + mailBody + '<pre>'
		    };

		    // send mail with defined transport object
		    transporter.sendMail(mailOptions, (error, info) => {
		        if (error) {
		            return console.log(error);
		        }
		        else {
		        	successMailArray.push(mailOptions.to);
		        	console.log('Mail sent to (' + successMailArray.length + '/' + mailToList.length + ') contacts(s)');
		        	mailToListLoop = mailToListLoop + 1;
		        	resolve(mailToListLoop);
		        }
		    });

			});
		}

		async function toConsoleFunction() {
			console.time('Mail Send in');
			let mailToListLoop = await toMailFunction();
			// console.log('mailToListLoop: ' + mailToListLoop);
			if(mailToListLoop != mailToList.length)
			{
				toConsoleFunction();
			}
			else{
				console.log('\n');
				console.timeEnd('Mail Send in');
				console.log('** Send Report **');
				console.log('Total mails To be send : ' + mailToList.length);
				console.log('Mails Send Succesfully : ' + successMailArray.length);
				console.log('Mails Not send         : ' + (mailToList.length - successMailArray.length));
				console.log('\n');
			}
		}

		toConsoleFunction();

		next();
	}

}
// https://stackoverflow.com/questions/47158979/node-wait-for-async-function-before-continue