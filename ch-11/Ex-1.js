//Exercise-1:Make a chat server that requires no authentication, just a TCP client connection. Each time the
//client sends some text, the server broadcasts it to the other clients.

var sockets = [];

require('net').createServer(function(socket) {
    sockets.push(socket);
    socket.on('data', function(data) {
        console.log('data :>> ', data.toString('utf8'));
        sockets.forEach(function(socket) {
            socket.write(data); 
        });
    });
    socket.on('end', function() {
        var pos = sockets.indexOf(socket);
        if (pos > 0) {
            sockets.splice(pos, 1);
        }
    });
}).listen(5001);

/*
    // Load the TCP Library
    net = require('net');

    // Keep track of the chat clients
    var clients = [];

    // Start a TCP Server
    net.createServer(function (socket) {

    // Identify this client
    socket.name = socket.remoteAddress + ":" + socket.remotePort 

    // Put this new client in the list
    clients.push(socket);

    // Send a nice welcome message and announce
    socket.write("Welcome " + socket.name + "\n");
    broadcast(socket.name + " joined the chat\n", socket);

    // Handle incoming messages from clients.
    socket.on('data', function (data) {
        broadcast(socket.name + "> " + data, socket);
    });

    // Remove the client from the list when it leaves
    socket.on('end', function () {
        clients.splice(clients.indexOf(socket), 1);
        broadcast(socket.name + " left the chat.\n");
    });
    
    // Send a message to all clients
    function broadcast(message, sender) {
        clients.forEach(function (client) {
        // Don't want to send it to sender
        if (client === sender) return;
        client.write(message);
        });
        // Log it to the server output too
        process.stdout.write(message)
    }

    }).listen(4000);

    // Put a friendly message on the terminal of the server.
    console.log("Chat server running at port 4000\n");

*/