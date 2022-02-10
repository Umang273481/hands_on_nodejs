var http = require('http');
var events = require('events').EventEmitter;

var eventEmitter = new events();

var server = http.createServer(function(req,res){
    eventEmitter.emit('Umang requested'); //Event Trigger
    res.end('Server Works!');
});

function connListener(stream) {
    console.log('Ah, we have our first user!');
    server.removeListener('connection', connListener);
    }
    server.on('connection', connListener);
    server.removeAllListeners('connection');
    server.listen('8080','localhost', );

    