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
	name: String,
	userName: String,
	password: String,
	phoneNum: String,
	date: {
		type: Date,
		default: Date.now
	}
});

var AdminUser = mongoose.model("AdminUser", AdminUserSchema);

model.exports = AdminUser;