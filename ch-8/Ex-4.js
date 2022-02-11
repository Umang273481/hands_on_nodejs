//Exercise 4 - Overwrite a file
//Having a file named a.txt, Overwrite it with the UTF-8-encoded string “ABCDEFGHIJLKLMNOPQRSTU-
//VXYZ0123456789abcdefghijklmnopqrstuvxyz”.

/*var fs = require('fs');
fs.open('a.txt', 'w', function (err, fd) {
    var writeBuffer = new Buffer('ABCDEFGHIJLKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz'),
        bufferOffset = 0,
        bufferLength = writeBuffer.length,
        filePosition = null;

    fs.write(fd,writeBuffer,bufferOffset,bufferLength,filePosition,function (err, written) {
            if (err) {
                throw err;
            }
            console.log('wrote ' + written + ' bytes');
        }
    );
}); */

var fs = require('fs');
    fs.open('a.txt', 'w', function(err, fd) {
        if (err) { throw err; }
        var buffer = new Buffer('ABCDEFGHIJLKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz');
        var written = 0;
        (function writeIt() {
            fs.write(fd, buffer, 0 + written, buffer.length - written, 0 + written, function(err, bytesWritten) {
                if (err) { throw err; }
                written += bytesWritten;
                if (written === buffer.length) {
                    console.log('File is overwrite');
                } else {
                    writeIt();
                }
            });
        })();
    });