
// Đảo ngược mảng
function reverseArray(arr) {
    if (arr.length === 0) {
        return [];
    }
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

// Dùng vòng lặp for

function reverseArrayFor(arr) {
    if (arr.length === 0) {
        return [];
    }
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArrayFor([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

