//Exercise-1: get the size of a file
//Having a file named a.txt, print the size of that files in bytes.

var fs = require('fs');

fs.stat('./input.txt', function(err, stats) {
    if (err) {
        console.log(err.message); 
        return;
    }
    //console.log(stats);
    console.log('this file is ' + stats.size + ' bytes long.');
});