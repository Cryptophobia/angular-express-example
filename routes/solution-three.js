var express = require('express');
var router = express.Router();

var users = {
  1: {
    name: 'john',
    email: 'john@email.com'
  },
  2: {
    name: 'peter',
    email: 'peter@email.com'
  },
  3: {
    name: 'max',
    email: 'max@email.com'
  }
};

/* GET solution one */
router.get('/', function(req, res, next) {
  res.render('solutionThree', {
    title: 'Express and Angular marriage',
    users: users
  });
});

module.exports = router;