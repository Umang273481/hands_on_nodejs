var net = require('net');
var server = net.createServer(function(socket) {
    // got a client connection here...
    console.log("got a client connection");
    });
server.listen(4000);