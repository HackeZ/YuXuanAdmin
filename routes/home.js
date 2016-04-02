var express = require('express');
var router = express.Router();

/* Home Main Page */
router.get('/', function(req, res, next) {
	console.log(req.session);
    res.render('Home', {
        username: "test",
        password: "test"
    });
});


router.get('/exit', function(req, res, next) {
	// if (res.clearCookie("adminLogined") && res.clearCookie("adminInfo")) {
	// 	res.redirect("/login");
	// } else {
	// 	res.redirect("/home");
	// }
	req.session.destroy();
	
});

module.exports = router;