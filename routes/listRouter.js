var express = require('express');
var router = express.Router();

// test by list
router.get('/', function(req, res, next) {
  let list = [
      {name: 'PHP', imagepath: "/img/home/hero-slide1.png"},
      {name: 'Ruby', imagepath: "/img/home/hero-slide2.png"},
      {name: 'Java', imagepath: "/img/home/hero-slide3.png"}
  ]
  res.render('test', { title: 'Demo Hbs', list: list });
});
module.exports = router;
