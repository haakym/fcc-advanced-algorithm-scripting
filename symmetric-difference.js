// https://www.freecodecamp.com/challenges/symmetric-difference

function sym(args) {
	const sets = [].slice.call(arguments);

	const result = sets
		.map(removeDuplicates)
		.reduce(symmetricDifference, []);

	return result;
}

function removeDuplicates(set) {
	return set.filter(function(item, pos, self) {
		return self.indexOf(item) == pos;
	});
}

function symmetricDifference(currentSet, newSet) {
	if (currentSet.length === 0) return currentSet.concat(newSet);

	newSet.forEach(num => {
		const indexOfNum = currentSet.indexOf(num);

		if (indexOfNum > -1) {
			currentSet.splice(indexOfNum, 1);			
		} else {
			currentSet.push(num);
		}

	});

	return currentSet;
}
