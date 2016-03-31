var express = require('express');
var router = express.Router();

/* JUMP to login page. */
router.get('/', function(req, res) {
	if (!req.session.isVisit) {
		console.log("Welcome To My Admon ***** in First time");
		req.session.isVisit = 1;
		res.redirect("/login");
	}else {
		req.session.isVisit++;
		console.log("Welcome To My Admon ***** in "+ req.session.isVisit +" times");
		res.redirect("/home");
	}
});

module.exports = router;
