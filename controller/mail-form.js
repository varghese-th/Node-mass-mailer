module.exports = {
	viewPage: function (req, res, next) {
		res.redirect('/mail-form');
	},

	settingmailSubject: function (req, res, next) {
		mailSubject = req.body.mail_subject;
		next();
	},

	settingmailToList: function (req, res, next) {
		mailToList = 'vthomask96@gmail.com';
		next();
	},

	settingmailText: function (req, res, next) {
		mailText = req.body.mail_body;
		next();
	}
}