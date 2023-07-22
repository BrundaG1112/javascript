5.Define a function sum() and a function multiply() that sums and multiplies 
(respectively) all the numbers in an array of numbers. 
For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// Define a function sum() and a function multiply() that sums and
// multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and
// multiply([1,2,3,4]) should return 24.
// https://jsfiddle.net/a7ukhbdn/

// Set addition
function sum(numbers) {
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}
// Print out the total to the console
console.log(sum([1,2,3,4]));


// Set multiplication
function multiply(numbers) {
	var total = 1;
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}
// Print out the total to the console
console.log(multiply([1,2,3,4]));