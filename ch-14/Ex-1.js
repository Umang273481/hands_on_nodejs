//Exercise-1:
//Create a server that a) opens a file b) listens on a unix domain socket and c) spawns a client. This
//client opens the socket to the server and waits for a file descriptor. The server then passes in the file
//descriptor we opened in a). The client writes to the file and quits. When the client process quits, the
//server quits.

var spawn = require('child_process').spawn;

require('fs').open(__dirname + '/a.txt', 'a', function(err, fileDesc)
{

    var server = require('net').createServer(function(socket) {

        socket.write('Here you go', fileDesc);
        socket.end();
        //server.close();
    });

    server.listen('./Example15.sock', function() {

        var child = spawn(process.argv[0], [__dirname + '/client.js']);
        child.on('exit', function() {
            console.log('child exited');
        });

    });
});