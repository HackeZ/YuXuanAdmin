var express = require('express');
var router = express.Router();

/* JUMP to login page. */
router.get('/', function(req, res) {
	if (!req.session) {
		res.redirect("/login");
	}else {
		res.redirect("/home");
	}
});

module.exports = router;
