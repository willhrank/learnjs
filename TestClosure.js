/**
 * 
 */

function multiplier(factor) {
	return function (number) {
		return number * factor;
	};
}

var twice = multiplier(2);
console.log("Hello " + twice(5));