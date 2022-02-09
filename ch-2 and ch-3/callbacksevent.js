// Hello world! prints every 4 seconds.
(function schedule() {
    setTimeout(function() {
    console.log('Hello World!');
    schedule();
    }, 2000);
    })();