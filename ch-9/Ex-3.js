//Exercise-3:Make an HTTP server that saves the request body into a file.

var options3 = {
    host: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST'
};

var fs = require('fs');
var http = require('http');
var req5 = http.request(options3, function(res){
    res.on('data', function(chunk){
        fs.open('./a.txt', 'a', function(err, fd){
            var writeBuffer = new Buffer((chunk));
        
            fs.write(fd, writeBuffer, 0, writeBuffer.length, null, function(err, writeBytes){
                if(err)
                    throw err;
        
                console.log(' Written ' + writeBytes + ' Bytes');
            });
        });
    });
});
req5.write('data \n');
req5.end();

/*var fs = require('fs');
var sequence = 1;
require('http').createServer(function (req, res) {
    var fileName = '/tmp/' + sequence + ' .bin';
    console.log("writing " + fileName);
    var writeStream = fs.createWriteStream(fileName);
    req.pipe(writeStream);
    req.on('end', function () {
        res.writeHead(200);
        res.end();
    });
    sequence++;
}).listen(3000);*/