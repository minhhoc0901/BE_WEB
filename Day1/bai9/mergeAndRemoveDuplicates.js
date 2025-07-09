// Gộp 2 mang và loại bỏ phần tử trùng lặp

function mergeAndRemoveDuplicates(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0) {
        return [];
    }
    // Gộp hai mảng
    const mergedArray = [...arr1, ...arr2];

    // Sử dụng Set để loại bỏ phần tử trùng lặp
    const uniqueSet = new Set(mergedArray);
    
    // Chuyển Set trở lại thành mảng
    return Array.from(uniqueSet);
}
console.log(mergeAndRemoveDuplicates([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]

// dùng vòng lặp for

function mergeAndRemoveDuplicatesFor(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0) {
        return [];
    }
    // Gộp hai mảng
    const mergedArray = [...arr1, ...arr2];
    
    let uniqueArr = [];
    for (let i = 0; i < mergedArray.length; i++) {
        if (!uniqueArr.includes(mergedArray[i])) {
            uniqueArr.push(mergedArray[i]);
        }
    }
    return uniqueArr;
}

console.log(mergeAndRemoveDuplicatesFor([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]

