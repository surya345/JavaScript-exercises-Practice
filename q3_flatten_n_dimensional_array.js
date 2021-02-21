/* Write a Program to Flatten a given n-dimensional array */

const flatten = (givenNumbers) => {
	// Write your code here
	var inputArrays = [];
	var outputArray = function flatten(givenNumbers) {
		var givenNumbersLength = givenNumbers.length;
		for (var i = 0; i < givenNumbersLength; i++) {
			Array.isArray(givenNumbers[i]) ? flatten(givenNumbers[i]) : inputArrays.push(givenNumbers[i]);
		}
		return inputArrays;
	}
	if (Array.isArray(givenNumbers)) {
		return outputArray(givenNumbers);
	}
	else {
		return null;
	}
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
