// Viết một hàm để kiểm tra xem mảng có phải là đối xứng hay không (phần tử đầu bằng phần tử cuối, phần tử thứ hai bằng phần tử áp cuối,...). 
// Gợi ý: Sử dụng vòng lặp hoặc so sánh từng cặp phần tử.

function isSymmetricArray(arr) {
    if (arr.length === 0) {
        return true; // Mảng rỗng được coi là đối xứng
    }
    
    const n = arr.length;
    for (let i = 0; i < Math.floor(n / 2); i++) { // lấy phần nguyên của n chia 2.
        if (arr[i] !== arr[n - 1 - i]) {
            return false; 
        }
    }
    return true;
}


console.log(isSymmetricArray([1, 2, 3, 2, 1])); // Output: true
console.log(isSymmetricArray([1, 2, 3, 4, 5])); // Output: false