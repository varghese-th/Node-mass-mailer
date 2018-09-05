var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

var DatabaseController = require('./../controller/database.js');

router.get('/', function(req, res, next) {
	res.render('database-operations.ejs', { forminputname: 'hi' });
});

router.post('/database', urlencodedParser, DatabaseController.viewPage);

module.exports = router;