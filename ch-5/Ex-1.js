//Exercise-1::
//Create an uninitialized buffer with 100 bytes length and fill it with bytes with values starting from
//0 to 99. And then print its contents.

var buffer = new Buffer(100); //100 bytes length buffer

for(var i=0;i<buffer.length;i++)
{
    buffer[i]=i;
    console.log(buffer[i]);
}
