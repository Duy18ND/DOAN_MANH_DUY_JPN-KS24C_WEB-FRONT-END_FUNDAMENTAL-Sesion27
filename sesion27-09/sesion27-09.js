let arr = [];
let number = +prompt("Nhập số lượng phần tử thêm vào mảng");
function check(arr, number) {
    if (number < 0 || isNaN(number) || !Number.isInteger(number)) {
        return ` Dữ liệu không hợp lệ`;
    } else {
        for (let i = 0; i < number; i++) {
            let index = +prompt(`arr[${i}]`);
            if (!isNaN(index) || Number.isInteger(index)) {
                arr.push(index);
            } else {
                i--;
                alert("Phần tử bạn nhập vào không hợp lệ. Vui lòng nhập lại");
            }
        }
        let evenNumber = arr.filter(function (num) {
            return num % 2 == 0;
        }).sort((a, b) => a - b);
        let count = 0;
        let result = arr.map(function (num) {
            if (num % 2 == 0) {
                return evenNumber[count++];
            } else {
                return num;
            }
        })
        return result;
    }
}
console.log(check(arr, number));