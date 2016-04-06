var express = require('express');
var router = express.Router();

// handle Illegal landing
router.use(function(req, res, next) {
	if (typeof(req.session.adminInfo) == "undefined" ||
		typeof(req.session.adminLogined) == "undefined") {
		return res.redirect("/login");
	}
	next();
});

/* Home Main Page */
router.get('/', function(req, res, next) {
	res.render('Home', {
		title: "YuXuanAdmin",
    	username: "test",
    	password: "test"
	})
});

/* Logout Success */
router.get('/logout', function(req, res, next) {

	req.session.destroy(function(err) {
		if (err == null) {
			res.redirect("/login");
		}else {
			res.send("session Destroy Failed!!!");
		}
	});
	
});

module.exports = router;