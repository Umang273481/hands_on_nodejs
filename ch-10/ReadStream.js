//Example of Read Stream

var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input1.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});
console.log("Program Ended");

