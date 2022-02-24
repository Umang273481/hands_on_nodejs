//Exercise-1:Create a UDP server that echoes the messages it receives back into the origin socket.

var dgram = require('dgram');

var socket = dgram.createSocket('udp4', function(message, rinfo){
    console.log(rinfo);
    socket.send(message, 0, message.length, rinfo.port, rinfo.address);
});
socket.bind(4002);