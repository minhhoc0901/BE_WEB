
function sumArray(arr) {
    const sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


// for
function sumArrayFor(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArrayFor([1, 2, 3, 4, 5])); // Output: 15