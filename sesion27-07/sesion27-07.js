let arr = [];
let number = +prompt("Mời bạn nhập số lượng phần tử vào mảng");
function check(arr, number) {
    if (number > 0 || !isNaN(number) || Number.isInteger(number)) {
        for (let i = 0; i < number; i++) {
            let index = +prompt(`arr${i}`);
            if (!isNaN(index) || Number.isInteger(index)) {
                arr.push(index);
            } else {
                return ` Dữ liệu bạn nhập vào không hợp lệ!`;
                i--;
            }
        }
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        let result = [];
        let count = -1;
        for (let i = min; i < max; i++) {
            if (!arr.includes(i)) {
                result.push(i);
                count++;
            }
        }
        if (count !== -1) {
            return ` Mảng thiếu số ${result.join(" ")}`;
        } else {
            return ` Mảng không thiếu số nào`;
        }
    } else {
        return ` Phần tử thêm vào mảng không hợp lệ`;
    }
}
console.log(check(arr, number));