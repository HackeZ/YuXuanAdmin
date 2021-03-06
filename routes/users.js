var express = require('express');
var router = express.Router();
var url = require('url');

// Admin
var AdminUser = require("../models/AdminUser");

// shortid
var shortid = require('shortid');
// config
var setting = require("../models/db/config");
// MongoDB Connect
var DbOpt = require("../models/db/Dbopt");



// handle Illegal landing
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  if (typeof(req.session.adminInfo) == "undefined" ||
    typeof(req.session.adminLogined) == "undefined") {
    return res.redirect("/login");
  }
  next();
});



        /*********** GET ***********/

router.get('/', function(req, res, next) {
  /* GET users listing. */
  res.render('users/user_list', {
  	title: "用户列表",
  	users: [{
  		_id: 1,
  		userName: '朱冠州',
  		loginName: 'HackerZ',
  		isAdmin: 'Yes',
  		createTime: '2016-22-56',
  		lastLoginTime: '2016-22-56'
  	},{
  		_id: 2,
  		userName: '朱冠州',
  		loginName: 'HackerZ',
  		isAdmin: 'Yes',
  		createTime: '2016-22-56',
  		lastLoginTime: '2016-22-56'
  	},{
  		_id: 3,
  		userName: '朱冠州',
  		loginName: 'HackerZ',
  		isAdmin: 'Yes',
  		createTime: '2016-22-56',
  		lastLoginTime: '2016-22-56'
  	}]
  });
});

router.get('/add', function(req, res, next) {
  /*** TEST SUCCESS ***/
  // var testAdmin = {
  //   userName: "hackerz",
  //   loginName: "HZ",
  //   password: "lovezhu123",
  //   phoneNum: 13232212086,
  //   isAdmin: "1"
  // };
  // req.body = testAdmin;
  // DbOpt.addOne(AdminUser,req,res);
  /*** TEST SUCCESS ***/
	res.render('users/user_add', {
		title: '添加新用户',
	});
});

router.get('/changepass', function(req, res, next) {
	res.render('users/user_change_pass', {
		title: '修改用户密码',
	})
});

router.get('/update/:id', function(req, res, next) {
	// req.param._id 在数据库中获取该 id 的数据并渲染
});


        /*********** POST ***********/

router.post('/addUser', function(req, res, next) {
  // Add A AdminUser
});


router.post('/update', function(req, res, next) {
	// 保存用户数据
});

module.exports = router;
