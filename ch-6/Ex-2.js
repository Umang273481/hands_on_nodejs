//Exercise-2::
//Build a script that instantiates one Ticker and bind to the “tick” event, printing “TICK” every time
//it gets one.

var EventEmitter = require('events').EventEmitter;
util = require('util');
var Ticker = function() {
    var self = this;
    setInterval(function() {
        self.emit('tick');
    }, 1000);
};
util.inherits(Ticker,EventEmitter);
var tick = new Ticker();

tick.on('tick', function() {//Event Listener
    console.log('TICK');
});



//second method::
//var period = 1000; // 1 second
//var interval = setInterval(function() {
//    console.log('TICK');
//}, period);