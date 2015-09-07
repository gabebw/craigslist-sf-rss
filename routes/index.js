var express = require('express');
var UrlGenerator = require('../url-generator');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/results', function(req, res, next) {
  var url = req.query.url;
  var rssUrls = new UrlGenerator(url).generate();
  res.render('results', { rssUrls: rssUrls });
});

module.exports = router;
