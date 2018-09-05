// controller to set the mailSubject and mailText

module.exports = {
	viewPage: function (req, res, next) {
		res.render('mail-form.ejs', { mailSubjectFormInput: req.body.mailSubjectFormInput, mailSalutationFormInput: req.body.mailSalutationFormInput, mailBodyFormInput: req.body.mailBodyFormInput, testMailFormInput: req.body.testMailFormInput });
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