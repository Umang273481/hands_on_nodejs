    
var fs = require('fs');
    fs.open('./input.txt', 'a', function(err, fd) {
        var writeBuffer = new Buffer('I am fine'),
        bufferOffset = 0,
        bufferLength = writeBuffer.length,
        filePosition = null;
     
        fs.write(fd,writeBuffer,bufferOffset,bufferLength,filePosition,function(err, written) {
            if (err) { 
                throw err; 
            }
            console.log('wrote ' + written + ' bytes');
            if (written > 0) {
                console.log(writeBuffer.slice(0, written).toString());
            }
        }
    );
});