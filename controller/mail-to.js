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
		mailToList = [ req.body.testMailFormInput ];
		next();
	},

	settingmailToList: function(req, res, next) {
		mailToList = [ 	'vthomask96@gmail.com',
						'joyalexaj19@gmail.com',
						'varghese.tblr@gmail.com' ];
		next();
	},

	settingmailToListName: function(req, res, next) {
		mailToListName = [ 	'vthomask',
							'joyalex',
							'vtblr' ];
		next();
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

