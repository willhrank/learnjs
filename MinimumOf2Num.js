/**
 * 
 */

function Minimum (num1, num2) {
	if (num1 < num2)
		return num1;
	else
		return num2;
}

console.log(Minimum(5, 10));
console.log(Minimum(4, 3));

var str = "Hello";
console.log(str.toUpperCase);
console.log(str.toUpperCase());

console.log(typeof[1, 2]);

var array = ["Hello", "World", "Show", "Me", "Your", "Leader"]
console.log(array.indexOf("Your"));

var countArg = function() {
	console.log('Number of arguments are : ' + arguments.length);
	console.log('They are : ');
	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}

countArg("Having", "Fun", "learning", 1, 2, 3);

function forEach(array, action) {
	for (var i = 0; i < array.length; i++) {
		action(array[i]);
	}
}

var myArray = ["Hi", 1, "Hello"];
forEach(myArray, function(arg) {
	console.log(arg);
});
