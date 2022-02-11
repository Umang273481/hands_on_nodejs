var fs = require('fs');

fs.stat('./input.txt', function(err, stats) {
    if (err) {
        console.log(err.message); 
        return;
    }
    console.log(stats);
    //console.log('this file is ' + stats.size + ' bytes long.');
});

var fs = require('fs');
fs.stat('/etc/passwd',function(err,stats){
    if(err){
        console.log(err.message);
        return;
    }
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isBlockDevice());
    console.log(stats.isCharacterDevice());
    console.log(stats.isSymbolicLink());
    console.log(stats.isSocket());
});