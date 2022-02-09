var myAsyncFunction = function(arg1, arg2, callback) {
    console.log(arg1,arg2);
    setTimeout(function() { 
    // 1 second later, we are done with the I/O, call the callback
        callback();
    }, 1000)
}
const arg1=200;
const arg2=300;
myAsyncFunction(arg1,arg2);
