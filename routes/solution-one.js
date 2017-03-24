var express = require('express');
var router = express.Router();

/* GET solution one */
router.get('/', function(req, res, next) {
  res.render('solutionOne', {
    title: 'Express and Angular marriage'
    //users: users
  });
});

module.exports = router;