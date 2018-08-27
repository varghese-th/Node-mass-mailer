// database functions to select the mailToList

module.exports = {
	settingmailToList: function(req, res, next) {
		mailToList = [ 	'vthomask96@gmail.com',
						'joyalexaj19@gmail.com',
						'varghese.tblr@gmail.com' ];
		next();
	}
}