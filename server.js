//package and module requirements
var express = require('express')
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
var User = require('./models/UserModel');
var beerRoutes = require('./routes/beerRoutes');
var userRoutes = require('./routes/userRoutes');


//let's get going...
var app = express();
mongoose.connect('mongodb://localhost/beers');

app.use(express.static('public'));
app.use(express.static('node_modules'));

//some middleware that we need
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/beers', beerRoutes);
app.use('/users', userRoutes);


app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
});

// main error handler
// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

//start the server
app.listen('8000', function() {
  console.log("yo yo yo, on 8000 bro");
});
