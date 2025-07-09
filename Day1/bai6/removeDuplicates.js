
// Viết hàm `removeDuplicates` nhận vào một mảng và trả về mảng mới không có phần tử trùng lặp.

function removeDuplicates(arr) {
    if (arr.length === 0) {
        return [];
    }
    // Sử dụng Set để loại bỏ phần tử trùng lặp
    const uniqueSet = new Set(arr);
    // Chuyển Set trở lại thành mảng
    return Array.from(uniqueSet);
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1])); // Output: [1, 2, 3, 4, 5]


// Dùng for
function removeDuplicatesFor(arr) {
    if (arr.length === 0) {
        return [];
    }
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicatesFor([1, 2, 3, 2, 4, 5, 1])); // Output: [1, 2, 3, 4, 5]