const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const cors = require('cors')
const app = express();



app.get('/api', cors(), (req, res) => {

    const phoneRegex = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/img;

    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi

    const options = {
    //https://www.google.com/search?q=elijah+privette+704
    url: `https://www.google.com/search?q=${req.query.name}+${req.query.location}+${req.query.areacode}`,
    headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
            }
        };

    request(options, function (error, response, body) {
        if(!error && response.statusCode == 200) {
            let $ = cheerio.load(body);
            var numbers = $('.st').text().match(phoneRegex) 
            var emails = $('.st').text().match(emailRegex)
            }
            var output = { numbers, emails }
         res.json(output)   
        })
    });




const PORT = process.env.PORT || 5000
app.listen(PORT)