// Different Method to create Buffer
var buffer1 = Buffer.alloc(100);
var buffer2 = new Buffer('UMANG');
var buffer3 = Buffer.from([1, 2, 3, 4, 5]);

// Writing data to Buffer
buffer1.write("hello umang");

// Reading data from Buffer
var a = buffer1.toString('utf-8');
console.log(a);

// Check object is buffer or not
console.log(Buffer.isBuffer(buffer1));

// Check length of Buffer
console.log(buffer1.length);



// concatenate two buffer
var buffer11 = new Buffer('my name is ');
var buffer12 = new Buffer('umang patel');
var buffer13 = Buffer.concat([buffer11, buffer12]);
console.log(buffer13.toString());
