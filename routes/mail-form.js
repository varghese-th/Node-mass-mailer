var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// calling controllers
var MailFormController = require('./../controller/mail-form.js');
var MailSenderController = require('./../controller/mail-sender.js');
var MailToController = require('./../controller/mail-to.js')

router.get('/', function(req, res, next) {
	res.render('mail-form.ejs')
});

router.post('/send', urlencodedParser, 	MailFormController.settingmailSubject,
										MailToController.settingmailToList,
										MailFormController.settingmailText,
										MailSenderController.sendingMail,
										MailFormController.viewPage);

module.exports = router;