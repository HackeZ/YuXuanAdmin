var express = require('express');
var router = express.Router();

/* Home Main Page */
router.get('/', function(req, res, next) {
    // req.session.
	res.render('Home', {
		username: "test",
		password: "test"
	});
});

module.exports = router;