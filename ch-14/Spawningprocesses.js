var spawn = require('child_process').spawn;

var child = spawn('tail', ['-f', './a.txt']);
    child.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
        child.kill(); //or child.kill('SIGKILL');
    });
    //child.stderr.on('data', function(data) {
    //  console.log('stderr: ' + data);
    //});

    //child.on('close', (code) => {
    //    console.log(`child process exited with code ${code}`);
    //});
    