// database functions to select the mailToList
var mysql = require('mysql');
var config = require('config');

var con = mysql.createConnection({
	host: config.databaseConnection.host,
  	user: config.databaseConnection.user,
  	// password: config.databaseConnection.password,
  	database: config.databaseConnection.database
});


module.exports = {
	settingtestMail: function(req, res, next) {
		if(req.body.testMailFormInput == '') {
			res.render('mail-form.ejs', { 	mailSubjectFormInput: req.body.mailSubjectFormInput,
											mailSalutationFormInput: req.body.mailSalutationFormInput,
											mailBodyFormInput: req.body.mailBodyFormInput,
											testMailFormInput: req.body.testMailFormInput,
											testMailError: 'error: Recepient Not Mentioned',
											databaseMailError: '' });
		}
		else {
			mailToList = [ { name: 'User', mailid: req.body.testMailFormInput } ];
			next();
		}
	},

	settingmailToList: function(req, res, next) {
		function toFillDatabaseFunction() 
		{
			return new Promise( resolve =>	{  
				mailToList = [ 	{ name: 'vthomask', mailid: 'vthomask96@gmail.com', price: '1200' },
								{ name: 'joyalex', mailid: 'joyalexaj19@gmail.com', price: '1300' },
								{ name: 'vtblr', mailid: 'varghese.tblr@gmail.com', price: '1400' }
							];
				resolve(mailToList);
			});
		}

		async function databaseFillCompleteFunction() {
			console.time('MailtoList Filled in');
			let mailToList = await toFillDatabaseFunction();
			console.log('\n');
			console.timeEnd('MailtoList Filled in');
			console.log('** MailtoList Filled **');
			console.log('Contents in mailToList : ' + mailToList.length + '\n');
			next();
		}

		databaseFillCompleteFunction();
	}

// viewDatabase: function (req, res, next) {
// 	con.connect(function(err) {
// 	  	if (err) throw err;
// 	  	var sqlQuery = "SELECT * FROM " + config.databaseConnection.tableName;
// 	  	con.query(sqlQuery, function (err, result, fields) {
// 	    	if (err) throw err;
// 	    	console.log(result);
// 	  	});
// 	});
// }

}

