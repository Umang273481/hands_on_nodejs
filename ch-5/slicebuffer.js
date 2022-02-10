// Slicing data
var buffer = new Buffer('this is the string in my buffer');
var slice = buffer.slice(10, 20);
console.log(slice.toString());