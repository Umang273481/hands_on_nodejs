//Example of piping

var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('input1.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('base.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");

//Example of Chaining.
/*
var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");*/