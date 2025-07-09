
function demSoLan(arr, num) {
    if (arr.length === 0) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }
    return count;
}
console.log(demSoLan([1, 2, 3, 4, 5, 3], 3)); // Output: 2

// Dùng reduce

function demSoLanReduce(arr, num) {
    if (arr.length === 0) {
        return 0;
    }
    return arr.reduce((count, current) => {
        return current === num ? count + 1 : count;
    }, 0);
}
console.log(demSoLanReduce([1, 2, 3, 4, 5, 3], 3)); // Output: 2
