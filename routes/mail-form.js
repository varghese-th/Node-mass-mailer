var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// calling controllers
var MailFormController = require('./../controller/mail-form.js');
var MailSenderController = require('./../controller/mail-sender.js');
var MailToController = require('./../controller/mail-to.js');
// var RedirectController = require('./../controller/redirectcontroller.js');

router.get('/', function(req, res, next) {
	res.render('mail-form.ejs', { 	mailSubjectFormInput: '',
									mailSalutationFormInput: '',
									mailBodyFormInput: '',
									testMailFormInput: '',
									testMailError: '' });
});

router.post('/testmail', urlencodedParser, 	MailFormController.settingmailSubject,
											MailFormController.settingmailSalutation,
											MailFormController.settingmailBody,
											MailToController.settingtestMail,
											MailSenderController.sendingMail,
											MailFormController.viewPage);

router.post('/send', urlencodedParser, 	MailFormController.settingmailSubject,
										MailFormController.settingmailSalutation,
										MailFormController.settingmailBody,
										MailToController.settingmailToList,
										MailSenderController.sendingMail,
										MailFormController.viewPage);

module.exports = router;