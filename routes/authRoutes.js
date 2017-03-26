var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { session: false }),
  function(req, res) {
    res.send(req.user);
  }
);

module.exports = router;
