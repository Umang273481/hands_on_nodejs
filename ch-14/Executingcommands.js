var exec = require('child_process').exec;

exec('cat *.js wc -l', function(err, stdout, stderr) {
    if (err) {
        console.log('child process exited with error code ' + err.code);
        return;
    }
    console.log(stdout);
});

//You can also pass an optional options argument between the command and the callback function
//like this:

//var options = {timeout: 10000};
//exec('cat *.js wc -l', options, function(err, stdout, stderr) {...});