
function pairwise(arr, arg) {

	return arr.reduce((result, number1, index1, array) => {
		const pairIndex = arr.findIndex((number2, index2, array) => {
			if (index1 !== index2 || number1 !== null || number2 !== null) {
				return (number1 + number2) === arg;
			}
		});

		if (pairIndex !== -1) {
			const sumOfIndices = index1 + pairIndex;
			result += sumOfIndices

			// set to null so they cannot be reused, but indices are preserved
			arr[index1] = null;
			arr[pairIndex] = null;
			
		}

		return result;

	}, 0);

}

// let pw = pairwise([1, 4, 2, 3, 0, 5], 7); // should return 11. P
let pw = pairwise([1, 3, 2, 4], 4); // should return 1. F
// let pw = pairwise([1, 1, 1], 2); // should return 1. P
// let pw = pairwise([0, 0, 0, 0, 1, 1], 1); // should return 10.
// let pw = pairwise([], 100); // should return 0.

console.log(pw);