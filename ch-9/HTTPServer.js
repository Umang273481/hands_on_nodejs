// Import the Node.js http module
var http = require('http'); 
  
// req is the request object which is
// coming from the client side
// res is the response object which is going
// to client as response from the server
  
// Create a server object
http.createServer(function (req, res) {
  
// 200 is the status code which means
// All OK and the second argument is
// the object of response header.
res.writeHead(200, {'Content-Type': 'text/html'}); 
  
    // Write a response to the client
    res.write('you have a created a web server');
  
    // End the response
    res.end();
  
}).listen(4000); // Server object listens on port 8081
  
console.log('Node.js web server at port 4000 is running..')

//The http.ServerRequest object

//req.url

/*require('http').createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(req.url);
    }).listen(4000);
    */

//req.method

//This contains the HTTP method used on the request. It can be, for example, ‘GET’, ‘POST’, ‘DELETE’
//or any other one.

//req.headers

/*var util = require('util');

require('http').createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(util.inspect(req.headers));
    }).listen(4000);*/

//The http.ServerResponse object

// var util = require('util');

// require('http').createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain',
//         'Cache-Control': 'max-age=3600',

//     });
//     res.end('Hello World!');
//     res.write('Hello');
    
//     var buf = new Buffer('Hello World');
//     buf[0] = 45;
//     res.write(buffer);
// }).listen(4000);

//Change or set a header and Remove a header

//require('http').createServer(function(req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end(req.url);
 //   }).listen(4000);

//res.setHeader(name,value);
//res.removeheader(name,value);


