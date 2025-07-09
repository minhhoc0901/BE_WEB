

function sortArrayAscending(arr) {
    if (arr.length === 0) {
        return [];
    }
    return arr.sort((a, b) => a - b);
}
console.log(sortArrayAscending([5, 2, 9, 1])); // [1, 2, 5, 9]

