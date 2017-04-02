var FacebookStrategy = require('passport-facebook').Strategy;
var passport = require('passport');

//passport configuration here
passport.use(new FacebookStrategy({
        clientID: 1357380317683447,
        clientSecret: "e8cff837dca361751fe84d04635a5a9f",
        callbackURL: 'http://localhost:8000/auth/facebook/callback',
        profileFields: ['email', 'displayName']

    },
    function(accessToken, refreshToken, profile, done) {

        //code to check database goes here

        //code to create JWT goes here

        return done(null, profile)
    }
));


module.exports = passport;
