var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var featuresRouter = require('./routes/features');
const { initialize } = require('unleash-client');
const unleash = require('unleash-server');


unleash
  .start({
    databaseUrl: 'postgres://postgres:postgres@localhost:5432/unleash',
    port: 4242,
    serverMetrics: true,
  })
  .then(unleash => {
    const instance = initialize({
        url: 'http://localhost:4242/api/',
        appName: 'my-app-name',
        instanceId: 'my-unique-instance-id',
    });
    // optional events
    instance.on('error', console.error);
    instance.on('warn', console.warn);
    instance.on('ready', console.log);

    // metrics hooks
    instance.on('registered', clientData => console.log('registered', clientData));
    instance.on('sent', payload => console.log('metrics bucket/payload sent', payload));
    instance.on('count', (name, enabled) => console.log(`isEnabled(${name}) returned ${enabled}`));
  });



var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/features', featuresRouter);

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
  res.render('error');
});

module.exports = app;
