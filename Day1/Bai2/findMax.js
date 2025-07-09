
function findMax(arr) {
    if (arr.length === 0){
        return null; 
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(findMax([-1, -2, -3, -4, -5])); // Output: -1

// dùng Math.max
function findMaxMath(arr) {
    if (arr.length === 0) {
        return null;
    }
    return Math.max(...arr);
}
console.log(findMaxMath([1, 2, 3, 4, 5])); // Output: 5
console.log(findMaxMath([-1, -2, -3, -4, -5])); // Output: -1
