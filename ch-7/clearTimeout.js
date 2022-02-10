//Program-1:

var timeoutHandle = setTimeout(function() { console.log('yehaa!'); }, 1000);
clearTimeout(timeoutHandle);

//Program-2:

var timeoutA = setTimeout(function() {
    console.log('timeout A');
}, 3000);

var timeoutB = setTimeout(function() {
    console.log('timeout B');
    clearTimeout(timeoutA);
}, 1000);
