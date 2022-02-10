//Exercise-3::
//Do what is asked on exercise 1 and then copy bytes ranging 40 to 60 into a new buffer. And then
//print it.

var buffer = new Buffer(100); //100 bytes length buffer

for(var i=0;i<buffer.length;i++)
{
    buffer[i]=i;
}

var buffer1= new Buffer(20);
buffer.copy(buffer1,0,40,60);
console.log(buffer1);