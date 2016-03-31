var express = require('express');
var router = express.Router();

/* Home Main Page */
router.get('/', function(req, res, next) {

    res.render('Home', {
        username: "test",
        password: "test"
    });
});


router.get('/exit', function(req, res, next) {
	if (res.clearCookie("isVisit")) {
		res.redirect("/login");
	} else {
		res.redirect("/home");
	}
	
	
});

module.exports = router;