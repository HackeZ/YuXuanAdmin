/**
 * This is The MongoDB Connect.
 */

var url = require('url');
// 加密类
var mongoose = require('mongoose');
var shortid = require('shortid');
var AdminUser = require('../AdminUser');

// global variable will be initialize immediately
var setting = require('./config');
var db = mongoose.connect(setting.URL);

// Common Function
var DbOpt = {


	del: function(obj,req,res,logMsg) {
		var params = url.parse(req.url,true);
        var targetId = params.query.uid;
        if(shortid.isValid(targetId)){
            obj.remove({_id : params.query.uid},function(err,result){
                if(err){
                    res.end(err);
                }else{
                    console.log(logMsg+" success!");
                    res.end("success");
                }
            })
        }else{
            res.end(settings.system_illegal_param);
        }
	},
	findAll: function(obj,req,res,logMsg) {
		obj.find({}, function (err,result) {
            if(err){
                res.next(err);
            }else{
                console.log(logMsg+" success!");
                return res.json(result);
            }
        })
	},
	findOne: function(obj,req,res,logMsg) {
		var params = url.parse(req.url,true);
        var targetId = params.query.uid;
        if(shortid.isValid(targetId)){
            obj.findOne({_id : targetId}, function (err,result) {
                if(err){
                    res.next(err);
                }else{
                    console.log(logMsg+" success!");
                    return res.json(result);
                }
            })
        }else{
            res.end(settings.system_illegal_param);
        }
	},
	addOne: function(obj,req,res) {
		var newObj = new obj(req.body);
        newObj.save(function(err){
            if(err){
                res.end(err);
            }else{
                res.end("success!");
            }
        });
	},
	updateOneByID : function(obj,req,res,logMsg){
        var params = url.parse(req.url,true);
        var targetId = params.query.uid;

        if(shortid.isValid(targetId)){
            var conditions = {_id : targetId};
            req.body.updateDate = new Date();
            var update = {$set : req.body};
            obj.update(conditions, update, function (err,result) {
                if(err){
                    res.end(err);
                }else{
                    console.log(logMsg+" success!");
                    res.end("success");
                }
            })
        }else{
            res.end(settings.system_illegal_param);
        }
    },
    getCount : function(obj,req,res,conditions){ // 查询指定对象的数量
        obj.count(conditions, function (err, count) {
            if (err){
                console.log(err);
            }else{
                return res.json({
                    count : count
                });
            }

        });
    }


};

module.exports = DbOpt;