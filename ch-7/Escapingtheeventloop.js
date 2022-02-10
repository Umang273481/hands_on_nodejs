var async = function(){
    console.log('hello world!');
}
var interval = 1000; // 1 second
 
//That means only 1 time Hello world! prints after 1 second
(function schedule() { 
    setTimeout(function() {
        async(function() {
            console.log('async is done!');
            schedule();
        });
    }, interval)
})();

/* continuously print Hello world! every 1 second */
setInterval(function() { 
    async(function() {
        console.log('async is done!');
    });
}, interval);