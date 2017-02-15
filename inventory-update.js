/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {

	let inventoryObj = {};
	let inventoryArr = [];

	arr1.concat(arr2)
		.sort((a, b) => {
			return a[1] > b[1];
		})
		.reduce((result, item) => {
			if(!result.hasOwnProperty(item[1])) {
				result[item[1]] = item[0];
			} else {
				result[item[1]] += item[0];
			}

			return result;
		}, inventoryObj);

	for (let key in inventoryObj) {
		inventoryArr.push([inventoryObj[key], key]);
	}

	return inventoryArr;

}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(
	updateInventory(curInv, newInv)
);