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

	//     for (var mailToListLoop=0; mailToListLoop<=(mailToList.length-1); mailToListLoop++) {

	// 	    // setup email data with unicode symbols
	// 	    let mailOptions = {
	// 	        from: '"' + config.mail.mainname + '" <'+ config.mail.mainmail + '>', // sender address
	// 	        to: mailToList[mailToListLoop], // list of receivers
	// 	        subject: mailSubject,
	// 	        // text: mailText
	// 	        html: '<strong>Name:</strong> ' + mailToListName[mailToListLoop]
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

	
	// sending function with asyc call and loop
	// sendingMail: function (req, res, next) {
	   
	//     let transporter = nodemailer.createTransport(config.authenticationMail);

	// 	let successMailArray = [];

	// 	function toMailFunction() 
	// 	{
	// 		return new Promise(function (resolve, reject)	{    
	// 			for (var mailToListLoop=0; mailToListLoop<=(mailToList.length-1); mailToListLoop++) 
	// 			{

	// 			    // setup email data with unicode symbols
	// 			    let mailOptions = {
	// 			        from: '"' + config.mail.mainname + '" <'+ config.mail.mainmail + '>', // sender address
	// 			        to: mailToList[mailToListLoop], // list of receivers
	// 			        subject: mailSubject,
	// 			        // text: mailText
	// 			        html: '<strong>Name:</strong> ' + mailToListName[mailToListLoop]
	// 			    };

	// 			    // send mail with defined transport object
	// 			    transporter.sendMail(mailOptions, (error, info) => {
	// 			        // console.log(mailOptions.to);
	// 			        if (error) {
	// 			            return console.log(error);
	// 			        }
	// 			        else {
	// 			        	successMailArray.push(mailOptions.to);
	// 			        	console.log('Mail sent to (' + successMailArray.length + '/' + mailToList.length + ') contacts(s)');
	// 			        }
	// 			    });

	// 			}
	// 			resolve(successMailArray);
	// 		});
	// 	}

	// 	async function toConsoleFunction() {
	// 		let successMailArrayy = await toMailFunction();
	// 		console.log('Success: ' + successMailArrayy.length);
	// 	}

	// 	toConsoleFunction();

	// 	next();
	// }

	
	// single mail with async call
	// sendingMail: function (req, res, next) {
	   
	//     let transporter = nodemailer.createTransport(config.authenticationMail);

	// 	// let successMailArray = [];

	// 	function toMailFunction() 
	// 	{
	// 		let successMailArray = [];
	// 		return new Promise( resolve =>	{    

	// 			    // setup email data with unicode symbols
	// 			    let mailOptions = {
	// 			        from: '"' + config.mail.mainname + '" <'+ config.mail.mainmail + '>', // sender address
	// 			        to: 'varghese.tblr@gmail.com', // list of receivers
	// 			        subject: mailSubject,
	// 			        // text: mailText
	// 			        html: '<strong>Name:</strong> '
	// 			    };

	// 			    // send mail with defined transport object
	// 			    transporter.sendMail(mailOptions, (error) => {
	// 			        // console.log(mailOptions.to);
	// 			        if (error) {
	// 			            return console.log(error);
	// 			        }
	// 			        else {
	// 			        	successMailArray.push(mailOptions.to);
	// 			        	console.log('Mail sent to (' + successMailArray.length + '/' + mailToList.length + ') contacts(s)');
	// 			        }
	// 			    });


	// 			resolve(successMailArray);
	// 		});
	// 	}

	// 	async function toConsoleFunction() {
	// 		let successMailArray = await toMailFunction();
	// 		console.log('Success: ' + successMailArray.length);
	// 	}

	// 	toConsoleFunction();

	// 	next();
	// }

	
	// to check callback
	// sendingMail: function (req, res, next) {
	   
	//     let transporter = nodemailer.createTransport(config.authenticationMail);

		

	// 	function toMailFunction(callback) 
	// 	{
 // 					let successMailArray = [];

	// 			    // setup email data with unicode symbols
	// 			    let mailOptions = {
	// 			        from: '"' + config.mail.mainname + '" <'+ config.mail.mainmail + '>', // sender address
	// 			        to: 'varghese.tblr@gmail.com', // list of receivers
	// 			        subject: mailSubject,
	// 			        // text: mailText
	// 			        html: '<strong>Name:</strong> '
	// 			    };

	// 			    // send mail with defined transport object
	// 			    transporter.sendMail(mailOptions, (error) => {
	// 			        // console.log(mailOptions.to);
	// 			        if (error) {
	// 			            return console.log(error);
	// 			        }
	// 			        else {
	// 			        	successMailArray.push(mailOptions.to);
	// 			        	console.log('Mail sent to (' + successMailArray.length + '/' + mailToList.length + ') contacts(s)');
	// 			        }
	// 			    });


	// 			callback(successMailArray);

	// 	}

	// 	toMailFunction(function(successMailArray) {
	// 		console.log('Success: ' + successMailArray.length);
	// 	})


	// 	next();
	// }

}
// https://stackoverflow.com/questions/47158979/node-wait-for-async-function-before-continue