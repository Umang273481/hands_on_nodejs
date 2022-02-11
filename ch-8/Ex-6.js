//Exercise 6 - change the content of a file
//Having a file named a.txt, change byte at pos 10 to the UTF-8 value of “7”.

var fs = require('fs');
fs.open('a.txt', 'a', function(err, fd) {
    if (err) { throw err; }
    var buffer = new Buffer('7');
    var written = 0;
    (function writeIt() {
        fs.write(fd, buffer, 0 + written, buffer.length - written, 10, function (err, bytesWritten) {
            if (err) { throw err; }
            written += bytesWritten;
            if (written === buffer.length) {
                console.log('changing file is Done');
            } else {
                writeIt();
            }
        });
    })();
});
