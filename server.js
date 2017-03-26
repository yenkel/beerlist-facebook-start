//package and module requirements
var express = require('express')
var bodyParser = require('body-parser');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var mongoose = require('mongoose');
var User = require('./models/UserModel');
var beerRoutes = require('./routes/beerRoutes');
var userRoutes = require('./routes/userRoutes');



//let's get going...
var app = express();
mongoose.connect('mongodb://localhost/beers');

passport.use(new FacebookStrategy({
    clientID: '175416002972154',
    clientSecret: '9e7c096b31f751a61e66474cd5628fe4',
    callbackURL: 'http://localhost:8000/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));
app.use(passport.initialize());

app.use(express.static('public'));
app.use(express.static('node_modules'));

//some middleware that we need
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/beers', beerRoutes);
app.use('/auth', authRoutes);


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
