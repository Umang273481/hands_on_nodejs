var https = require('https'),
    fs = require('fs');

var options = {
    key: fs.readFileSync('/home/shresh/hands_on_nodejs/ch-17/my_key.pem'),
    cert: fs.readFileSync('/home/shresh/hands_on_nodejs/ch-17/cert.pem')
};

https.createServer(options, function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
});