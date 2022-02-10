//program-1::
var period = 2000; // 1 second
var interval = setInterval(function() {
console.log('yes!!');
}, period);
clearInterval(interval);

//program-2::process.nextTick

process.nextTick(function() {
    // this runs on the next event loop
    console.log('yay!');
    });