
function findEvenNumbers(arr) {
    if (arr.length === 0) {
        return [];
    }
    return arr.filter(num => num % 2 === 0);
}

console.log(findEvenNumbers([1, 2, 3, 4, 5])); // Output: [2, 4]
console.log(findEvenNumbers([])); // Output: []