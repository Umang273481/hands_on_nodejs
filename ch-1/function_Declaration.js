//types of function declarations

(function() {
    console.log('Umang Patel');
    })();//invoke an anonymous function in-place

function myFunction () {
   console.log('Umang Patel');
}
//functions within inner scopes

function func2(){
	console.log('Umang Patel')
}//This function will never be called
func2();//After executing this line, func2 will be called and the message will be displayed

function myFunction(){
    console.log('Umang Patel');
}
(function(){
    myFunction();
})();

//describing functions with variables

var myFunc = function func2(){
	console.log('Umang Patel');
}
myFunc();

//directly declaring functions inline
console.log(function(){
    console.log('Umang Patel');
});

//All same output:: Umang Patel