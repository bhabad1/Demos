require('rootpath')();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var tasksRouter = require('routes/tasks');
var errorHandler = require('middleware/error_handler');





var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/tasks', tasksRouter);
app.use(errorHandler);

module.exports = app;
