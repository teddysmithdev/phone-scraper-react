const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const cors = require('cors')
const app = express();

app.use(express.static(__dirname + '/public'));


app.get('/api', cors(), (req, res) => {

    const regex = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/img;

    const options = {
    url: `https://www.google.com/search?q=$${req.query.first}+${req.query.last}+${req.query.areacode}`,
    headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
            }
        };

    request(options, function (error, response, body) {
        if(!error && response.statusCode == 200) {
            let $ = cheerio.load(body);
            var descriptionGrab = { numbers: $('.st').text().match(regex) }
            }
         res.send(descriptionGrab)   
        })
    });


// listen for requests :)
const listener = app.listen(5000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});