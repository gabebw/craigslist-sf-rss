var express = require('express');
var UrlGenerator = require('../url-generator');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/results', function(req, res, next) {
  var url = req.query.url;
  var rssUrls = new UrlGenerator(url).generate();
  res.render('results', { url: url, rssUrls: rssUrls });
});

router.get('/opml', function(req, res, next) {
  var url = req.query.url;
  var rssUrls = new UrlGenerator(url).generate();

  res.set('Content-Type', 'text/xml');
  res.set('Content-Disposition', 'attachment; filename="craigslist.opml"');
  res.render('opml', { rssUrls: rssUrls });
});

module.exports = router;
