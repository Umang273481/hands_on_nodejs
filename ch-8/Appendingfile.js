var fs = require('fs');
var startAppender = function (fd, startPos) {
    var pos = startPos;
    return {
        append: function (buffer, callback) {
            var oldPos = pos;
            pos += buffer.length;
            fs.write(fd, buffer, 0, buffer.length, oldPos, callback);
        }
    };
};
// start appender
fs.open('input.txt', 'w', function (err, fd) {
    if (err) {
        throw err;
    }
    var appender = startAppender(fd, 0);
    appender.append(new Buffer('append this!'), function (err) {
        console.log('file is Appended');
    });
});

//method-2::
/*var fs = require('fs');
   
var data = "\nLearn Node.js";
   
// Append data to file
fs.appendFile('input.txt', data, 'utf8',
  
    // Callback function
    function(err) { 
        if (err) throw err;
  
        //  If no error
        console.log("Data is appended to file successfully.")
});*/