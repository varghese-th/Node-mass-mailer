// controller to set the mailSubject and mailText

module.exports = {
	viewPage: function (req, res, next) {
		// var reply = '';
		// reply += "<strong>Name</strong> : " + req.body.name;
		// reply += "<br><strong>Address</strong> : " + req.body.address;
		res.send();
	},

	settingmailSubject: function (req, res, next) {
		mailSubject = req.body.mailSubjectFormInput;
		next();
	},

	settingmailSalutation: function(req, res, next) {
		mailSalutation = req.body.mailSalutationFormInput
		next();
	},

	settingmailBody: function (req, res, next) {
		mailBody = req.body.mailBodyFormInput;
		next();
	}
}