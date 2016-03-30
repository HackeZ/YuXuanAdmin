/* Web引用模块 */
var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var path = require('path');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/* 引入相关路由 */
var routes = require('./routes/index');
var users = require('./routes/users');
var home = require('./routes/home');
var login = require('./routes/login');

/* 站点配置 */
var config = require('./models/db/config');

var app = express();

// 设置模板引擎
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(config.session_secret));
app.use(express.static(path.join(__dirname, 'public')));

// session管理（必须要在 路由规则 前面，否则session一直未定义）
app.use(session({
 secret: config.session_secret,
 store: new RedisStore({
   host: config.redis_host,
   port: config.redis_port,
   pass: config.redis_pass,
   ttl: 3600000 // 过期时间
 }),
 resave: true, // 如果没有这两句代码会报错
 saveUninitialized: true
}));



// 路由规则
app.use('/', routes);
app.use('/users', users);
app.use('/home', home);
app.use('/login', login);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
