
console.log(findMostFrequent([1, 2, 3, 2, 4, 2, 5, 2, 2, 5, 5, 5])); // Output: 2

function findMostFrequent(arr) {
    if (arr.length === 0) return null;
    const freq = {};
    let max = 0;
    let result = arr[0];
    for (const item of arr) {
        freq[item] = (freq[item] || 0) + 1;
        if (freq[item] > max) {
            max = freq[item];
            result = item;
        }
    }
    return result;
}