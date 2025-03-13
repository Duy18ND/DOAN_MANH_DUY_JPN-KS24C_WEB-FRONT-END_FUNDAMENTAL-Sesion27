let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = 3;
function check(arr, n) {
    let result = [];
    if (!Array.isArray(arr) || !Number.isInteger(n) || n <= 0) {
        return ` Dữ liệu không hợp lệ`;
    }
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}

console.log(check(arr, n));