var express = require('express');
var router = express.Router();


/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('Login', {
   		title: '御轩寝饰后台登陆'
   });
});


/* Do Login */
router.post('/doLogin', function(req, res, next) {
	console.log("Usename: " + req.body.username + " Password: " + req.body.password);
	if (req.body.username === "admin" && req.body.password === "admin") {
		console.log("密码对了");
		// session 信息
		req.session.adminLogined = true;
		req.session.adminInfo = 'admin';

		res.status(200).send({"status":1,"info":"正在跳转..."});
	} else {
		console.log("密码cuo了");
		res.status(200).send({"status":-1,"info":"用户名或密码错误"});
	}
});

/* Logout */
router.get('/logout', function(req, res, next) {
	req.session.adminLogined = false;
	req.session.adminInfo = '';
	res.redirect('/index');
});

module.exports = router;
