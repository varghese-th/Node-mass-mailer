// controller to set the mailSubject and mailText

module.exports = {
	viewPage: function (req, res, next) {
		res.end('it worked');
	},

	settingmailSubject: function (req, res, next) {
		mailSubject = req.body.mailSubjectFormInput;
		next();
	},

	// settingmailToList: function (req, res, next) {
	// 	mailToList = 'vthomask96@gmail.com';
	// 	next();
	// },

	settingmailText: function (req, res, next) {
		mailText = req.body.mailBodyFormInput;
		next();
	}
}