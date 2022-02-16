//Example of Write Stream

var fs = require("fs");
var data = 'How Are You??';

// Create a writable stream
var writerStream = fs.createWriteStream('base.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
   console.log("Write completed.");
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");
/*
const fs = require('fs');
const readStream = fs.createReadStream('./base.txt','utf-8');
const writeStream = fs.WriteStream('input1.txt');
//readStream object inherits from event emitter class
readStream.on('data',(chunk)=>{
//the call back funtion will be invoked every time it reads a chunk of data
/*
Why chunk?
when you get this chunk , you can immediately start manipulating the chunk
without waiting for the whole file to load.
*/
    //console.log(chunk);
  /*  writeStream.write(chunk);
    console.log('File written while reading a file')
});
//ending the stream
readStream.on('end', function() {
    console.log('program ended');
})
//resuming the stream
readStream.resume();
//you can also write a buffer
var buffer = new Buffer('this is a buffer with some string');
writeStream.write(buffer); */
