var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//carga de libreira
var session=require('express-session');
//carga de libreria flash
var flash=require('connect-flash');
//carga de logger
var winston=require('./config/winston');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminsRouter=require('./routes/admins');
var flashRouter=require('./routes/loginFlash');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// hacer rutas para partials
var hbs=require('hbs');
hbs.registerPartials(`${__dirname}/views/partials`);
// que actualize la pag automaticamente sin apagar el server
var hbsUtils=require('hbs-utils')(hbs);
hbsUtils.registerWatchedPartials(`${__dirname}/views/partials`);
//crea una coky
app.use(session({
    secret:'1234',
    name: 'Sesion',
    resave:true,
    saveUninitialized:true
}));

app.use(flash());
app.use(logger('combined',{stream:winston.stream}));
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// rutas estaticas para carpetas public y node_modules
app.use(express.static(path.join(__dirname, 'public')));
app.use('/components',express.static(`${__dirname}/public/components`));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admins',adminsRouter);
app.use('/loginFlash',flashRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
    res.render('error404',
        {
            title: 'error',
            layout: 'layout2',
        });
});

module.exports = app;
