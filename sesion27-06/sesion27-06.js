let arr = [];
let number = +prompt("Nhập phần tử thêm vào mảng");
function check(arr, number) {
    if (number > 0 || !isNaN(number) || Number.isInteger(number)) {
        for (let i = 0; i < number; i++) {
            let index = +prompt(`arr[${i}]`);
            arr.push(index);
        }
        let tax = arr[1] - arr[0];
        for (let i = 2; i < number; i++) {
            if (arr[i] - arr[i - 1] !== tax || arr[i] < 1) {
                return `${arr} Không phải là cấp số cộng`;
            }

            return `${arr} là cấp số cộng`;
        }
    } else {
        return ` Phần tử bạn thêm vào không hợp lệ`;
    }
}
console.log(check(arr, number));