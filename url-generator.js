var url = require('url');
var extend = require('util')._extend;

var clone = function(object) { return extend({}, object); }

/*
Generate the following URLs (with and without roommates) for every neighborhood
in SF.

No roommates (/apa)
https://sfbay.craigslist.org/search/sfc/apa?hasPic=1&max_price=2200&min_price=500&nh=149

With roommates (/roo)
https://sfbay.craigslist.org/search/sfc/roo?hasPic=1&max_price=2200&min_price=500&nh=149&private_room=1
*/

var UrlGenerator = function(originalUrl) {
  this.originalUrl = originalUrl;
  this.roommatePath = "/search/sfc/roo";
  this.noRoommatePath = "/search/sfc/apa";
  this.neighborhoods = {
    1: "SOMA / south beach",
    2: "USF / panhandle",
    3: "bernal heights",
    4: "castro / upper market",
    5: "cole valley / ashbury hts",
    6: "downtown / civic / van ness",
    7: "excelsior / outer mission",
    8: "financial district",
    9: "glen park",
    10: "lower haight",
    11: "haight ashbury",
    12: "hayes valley",
    13: "ingleside / SFSU / CCSF",
    14: "inner richmond",
    15: "inner sunset / UCSF",
    16: "laurel hts / presidio",
    17: "marina / cow hollow",
    18: "mission district",
    19: "nob hill",
    20: "lower nob hill",
    21: "noe valley",
    22: "north beach / telegraph hill",
    23: "pacific heights",
    24: "lower pac hts",
    25: "potrero hill",
    26: "richmond / seacliff",
    27: "russian hill",
    28: "sunset / parkside",
    29: "twin peaks / diamond hts",
    30: "western addition",
    110: "bayview",
    114: "west portal / forest hill",
    118: "visitacion valley",
    149: "alamo square / nopa",
    156: "tenderloin",
    157: "treasure island",
    164: "portola district"
  }
};

UrlGenerator.prototype.generate = function(){
  var parsed = url.parse(this.originalUrl, true);
  var result = { roommates: {}, noRoommates: {} };

  for(var neighborhoodId in this.neighborhoods){
    var neighborhoodName = this.neighborhoods[neighborhoodId];
    var rssUrl = clone(parsed);
    extend(rssUrl.query, { nh: neighborhoodId, format: 'rss' });
    rssUrl.search = null;
    result.roommates[neighborhoodName] = url.format(
      extend(clone(rssUrl), { pathname: this.roommatePath  })
    );
    result.noRoommates[neighborhoodName] = url.format(
      extend(clone(rssUrl), { pathname: this.noRoommatePath  })
    );
  };
  return result;
};

module.exports = UrlGenerator;
