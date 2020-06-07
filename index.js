const cheerio = require('cheerio');
const request = require('request');


request.get({
  headers: {
'user-agent' : 'Mozilla/5.0 (Linux; Android 8.1.0; vivo 1820) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36'
},
  url: 'https://jagokata.com/kata-bijak/acak.html',
},function(error, response, body){
    let $ = cheerio.load(body);
    const author = $('a[class="auteurfbnaam"]').contents().first().text();
    const  kata = $('q[class="fbquote"]').contents().first().text();
    var getkata = kata +"\n ~"+ author;
    console.log(getKata);
});

