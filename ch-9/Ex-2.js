//Exercise-2:Make an HTTP server that outputs plain text with 100 new-line separated unix timestamps every second.

    http = require('http');
    http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    var interval = setInterval(function(){
        for(var i=0; i<100; i++)
            res.write(Date.now()+"\n");
        clearInterval(interval);
        res.end();
    },1000)//1 second   
}).listen(4005);