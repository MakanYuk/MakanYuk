var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cors = require('cors')
require('dotenv').config()

<<<<<<< HEAD
var routes = require('./routes/index');
var users = require('./routes/users');
var hosted_meals = require('./routes/hosted_meals')
=======
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASS}@ds113692.mlab.com:13692/makanyuk`, { useNewUrlParser: true });
>>>>>>> 557f86b86d6995b91dea1d3d1ecd8cc3230e2733

let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let routes = require('./routes/index');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use('/', routes);
<<<<<<< HEAD
app.use('/users', users);
app.use('/user/hosted_meals', hosted_meals)
=======
>>>>>>> 557f86b86d6995b91dea1d3d1ecd8cc3230e2733

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

/// error handlers

// development error handler
// will print stacktrace
<<<<<<< HEAD
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });
=======
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
});
>>>>>>> 557f86b86d6995b91dea1d3d1ecd8cc3230e2733

module.exports = app;
