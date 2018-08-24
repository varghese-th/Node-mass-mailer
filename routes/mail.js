var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// calling controllers
var MailController = require('./../controller/mail.js');

router.get('/', function(req, res, next) {
	res.render('mail.ejs')
});

router.post('/send', urlencodedParser, MailController.sendingMail);

module.exports = router;