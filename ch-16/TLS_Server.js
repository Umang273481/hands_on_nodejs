var tls = require('tls');
fs = require('fs');
options = {
key : fs.readFileSync('/home/shresh/hands_on_nodejs/ch-16/key.pem'),
cert : fs.readFileSync('/home/shresh/hands_on_nodejs/ch-16/cert.pem')
};

tls.createServer(options, function(s) {
s.pipe(s);
}).listen(4000);
