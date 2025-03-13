let number = +prompt("Mời bạn nhập số nguyên bất kỳ");
function check(number) {
    if (isNaN(number) || !Number.isInteger(number)) {
        return ` dữ liệu không hợp lệ`;
    } else {
        let arr = [];
        arr = String(number).split("").map(Number);
        arr.sort((a, b) => b - a);
        return arr.join("");
    }
}
console.log(check(number));