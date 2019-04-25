var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',
    {
      title: 'Interview challenge',
      author: 'by Henrique Ornellas de Oliveira',
      countdown: '3, 2, 1...'
    });
});

module.exports = router;
