var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get('/', function(req, res, next) {
	res.render('database-operations.ejs');
});

module.exports = router;