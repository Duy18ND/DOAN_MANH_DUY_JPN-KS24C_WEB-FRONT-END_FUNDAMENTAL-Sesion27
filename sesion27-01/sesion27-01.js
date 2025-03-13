let menu = `
1.Cộng hai số.
2.Trừ hai số.
3.Nhân hai số.
4.Chia hai số.
5.Thoát.
Mời bạn lựa chọn:
`
let choice = 0;
while (choice !== 5) {
    choice = +prompt(menu);
    if (choice != 5) {
        let a = +prompt("Nhập số a");
        let b = +prompt("Nhập số b");
        switch (choice) {
            case 1:
                console.log(resultSum(a, b));
                break;
            case 2:
                console.log(resultSignal(a, b));
                break;
            case 3:
                console.log(resultAccumulation(a, b));
                break;
            case 4:
                console.log(resultThuong(a, b));
                break;
            default:
                console.log("Lựa chọn của bạn không hợp lệ");
        }
    } else {
        console.log(` Thoát khỏi chương trình`);
    }
}
function resultSum(a, b) {
    return `Tổng hai số là: ${a + b}`;
}
function resultSignal(a, b) {
    return `Tổng hai số là: ${a - b}`;
}
function resultAccumulation(a, b) {
    return `Tổng hai số là: ${a * b}`;
}
function resultThuong(a, b) {
    return `Tổng hai số là: ${a / b}`;
}