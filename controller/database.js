module.exports = {
	viewPage: function(req, res, next) {
		console.log('hi ' + req.body.forminputname);
		res.render('database-operations.ejs', { forminputname: req.body.forminputname });
		// next();
	}
}