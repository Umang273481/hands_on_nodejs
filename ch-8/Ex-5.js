//Exercise 5 - append to a file
//Having a file named a.txt, append UTF-8-encoded string “abc” to file a.txt.

var fs = require('fs');
fs.open('a.txt', 'a', function (err, fd) {
    var buff = new Buffer("append string 'abc'"),
        bufferOffset = 0,
        bufferLength = buff.length,
        filePosition = null;
    fs.write(
        fd,
        buff,
        bufferOffset,
        bufferLength,
        filePosition,
        function (err, appended) {
            if (err) {
                throw err;
            }
            console.log('wrote ' + appended + ' bytes');
        }
    )

});
