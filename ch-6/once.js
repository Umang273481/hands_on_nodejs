var http = require('http');
var events = require('events').EventEmitter;

var eventEmitter = new events();

var server = http.createServer(function(req,res){
    eventEmitter.emit('Umang requested'); //Event Trigger
    res.end('Server Works!');
});

server.once('connection', function (stream) {
    console.log('Ah, we have our first user!');
    });
    server.listen('8080','localhost', );