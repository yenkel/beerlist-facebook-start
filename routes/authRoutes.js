var express = require('express');
var router = express.Router();
var passport = require('../models/passport');


router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get('/facebook/callback',
    passport.authenticate('facebook', { session: false, failureRedirect: "/" }),
    function(req, res) {
        console.log(req.user);
        res.redirect('/');
    }
);

module.exports = router;
