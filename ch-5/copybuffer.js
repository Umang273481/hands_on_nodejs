// Copy buffer
var buffer1 = new Buffer('Umang Patel');
var buffer2 = Buffer.alloc(5);
buffer1.copy(buffer2);
 
var output = buffer2.toString('utf-8');
console.log(output);