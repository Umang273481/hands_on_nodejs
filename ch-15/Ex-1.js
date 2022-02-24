//Exercise-1:Create a mixed TCP and HTTP server that, for every HTTP request, streams all the TCP clients
//input into the request response.

var http = require('http');
var events = require('events').EventEmitter;
var eventEmitter = new events();

require('net').createServer(function(socket) {
    // new connection
    socket.on('data', function(data) {
        eventEmitter.emit('data',data)
    });
}).listen(4000);

require('http').createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.on('data', function(data) {
        res.write(data);
    });
    
}).listen(4002);