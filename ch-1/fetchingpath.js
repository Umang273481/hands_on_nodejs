const fs = require('fs');
fs.open('/home/shresh/nodejs/ch-1/hello.js',function(err,fd){
    if(err){ 
        //handle any exception
        return;
    }
    console.log('file opened and got file descriptor :: '+ fd);
})
