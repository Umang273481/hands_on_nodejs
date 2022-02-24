var server = require('dgram').createSocket('udp4');

server.on('message', function(message, rinfo) {
    console.log('server got message: ' + message + ' from ' + rinfo.address + ':' + rinfo.port);
});

/*never do like this as the below commmented lines will generate an error*/
// server.addMembership('230.1.2.3');
// server.bind(4000);

//always do like this
server.bind(4000, function(){
    server.addMembership('230.1.2.3');
});