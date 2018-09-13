// controller to set the mailSubject and mailText

module.exports = {
	viewPageTestmail: function (req, res, next) {
		res.render('mail-form.ejs', { 	mailSubjectFormInput: req.body.mailSubjectFormInput,
										mailSalutationFormInput: req.body.mailSalutationFormInput,
										mailBodyFormInput: req.body.mailBodyFormInput,
										testMailFormInput: req.body.testMailFormInput,
										testMailError: 'info: check console for report',
										databaseMailError: '' });
	},

	viewPageDatabase: function (req, res, next) {
		res.render('mail-form.ejs', { 	mailSubjectFormInput: req.body.mailSubjectFormInput,
										mailSalutationFormInput: req.body.mailSalutationFormInput,
										mailBodyFormInput: req.body.mailBodyFormInput,
										testMailFormInput: req.body.testMailFormInput,
										testMailError: '',
										databaseMailError: 'info: check console for report' });
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