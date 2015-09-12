# Craigslist RSS

The app is here: https://craigslist-sf-rss.herokuapp.com/

How does it work?

Search on craigslist for your perfect apartment — cats, max price, all that. Then paste your URL below.
This app will generate a separate RSS feed for every single neighborhood in SF,
both with and without roommates.

Neat!

This lets you subscribe to (say) SOMA separately from Noe Valley,
if you're more interested in one than the other,
without having to search with the same criteria 50 times
just to get feeds for every neighborhood you're interested in.

Just search once, then paste the resulting URL into this app.
Voila, results for every neighborhood in SF.

## Technical Architecture

It's a basic Express.js app because I wanted to try out Express.js.
The ability to have routes in separate files is neat.
