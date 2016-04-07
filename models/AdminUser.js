/*
 * Created by HackerZ on 2016/02/02.
 * 管理员用户
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;


var AdminUserSchema = new Schema({
	_id: {
		type: String,
		unique: true,
		'default': shortid.generate
	},
	userName: String,
	loginName: String,
	password: {
		type: String,
		'default': '123456'
	},
	phoneNum: Number,
	isAdmin: String,
	date: {
		type: Date,
		default: Date.now
	},
	logo: {
		type: String,
		default: "/upload/images/defaultlogo.png"
	}
});

var AdminUser = mongoose.model("AdminUser", AdminUserSchema);

module.exports = AdminUser;