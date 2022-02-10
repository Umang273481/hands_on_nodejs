//Exercise-1::
//Build a pseudo-class named “Ticker” that emits a “tick” event every 1 second.

var EventEmitter = require('events').EventEmitter;
util = require('util');
var Ticker = function() {
    var self = this;
    setInterval(function() {
        self.emit('tick');
        //console.log('Umang');
    }, 1000);
};
util.inherits(Ticker,EventEmitter);
var tick = new Ticker();