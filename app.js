var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors= require("cors")

// var indexRouter = require('./routes/indexRouter');

const soldiersRouter = require("./routes/soldiersRouter")
const testsRouter = require("./routes/testsRouter")

var app = express();

//  this portion is for my database
var mongoose = require("mongoose")
//  if I want to try local: 1. start server 2. start T3 3. change url "mongodb://localhost:27017/fullStackWar"
var mongoDBAtlasUrl = "mongodb+srv://jacklizeya:lixiaohua1967@fullstackwar.ukktn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongoDBAtlasUrl, { useNewUrlParser: true , useUnifiedTopology: true}).then(console.log("Connect to MongoDB atlas successfully!")).catch((error) => {console.log(error)})
var fullStackWardb = mongoose.connection
fullStackWardb.on("connected", ()=> {console.log("connected!")})
fullStackWardb.on('error', console.error.bind(console, 'MongoDB connection error:'))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json()); //This is the Json Parse
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//set up the frontend access
app.use(express.static((process.env.NODE_ENV === "production")? ("./frontend/build") : (path.join(__dirname, 'public'))))




app.use(cors())


// All request to subrouter will be directed
// app.use('/', indexRouter);
// Above line eems useless at this moment with static
app.use("/soldiers", soldiersRouter)
app.use("/tests", testsRouter)


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
