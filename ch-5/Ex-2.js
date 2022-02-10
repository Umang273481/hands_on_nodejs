//Exercise-2::
//Do what is asked on the previous exercise and then slice the buffer with bytes ranging 40 to 60. And
//then print it.

var buffer = new Buffer(100); //100 bytes length buffer

for(var i=0;i<buffer.length;i++)
{
    buffer[i]=i;
}

var slice = buffer.slice(40,60);
console.log(slice);