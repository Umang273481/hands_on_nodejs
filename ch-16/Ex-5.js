var fs = require('fs');
var options = {
    key: fs.readFileSync(__dirname + '/Ex-1/client1/client.pem'),
    cert: fs.readFileSync(__dirname + '/Ex-1/client1/client_cert.pem')
};
var client = require('tls').connect(4002, options, function(err) {
    client.connected = true;
    console.log('connected');
    process.stdin.resume();
    process.stdin.pipe(client);
    client.pipe(process.stdout, {end: false});
});