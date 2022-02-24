var net = require('net');
    var port = 4000;
    var host = 'localhost';
    var conn = net.createConnection(port, host);


    conn.on('data', function(data) {
        console.log('some data has arrived')
        console.log("data= " + data.toString());
    });

    conn.write('Some string! ');

    // conn.destroy();

    // conn.on('close', function() {
    //     console.log('connection closed');
    //});