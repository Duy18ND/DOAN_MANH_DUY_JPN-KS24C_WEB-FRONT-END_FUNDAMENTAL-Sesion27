let menu = `
1.Tính diện tích hình tròn.
2.Tính chu vi hình tròn.
3.Tính diện tích hình chữ nhật.
4.Tính chu vi hình chữ nhật.
5.Thoát.
`
let choice = 0;
while (choice != 5) {
    let a = 0;
    let b = 0;
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let result = sCircle(a);
            console.log(result);
            break;
        case 2:
            let tax = cPerimeter(a);
            console.log(tax);
            break;
        case 3:
            let count = sRectangular(a, b);
            console.log(count);
            break;
        case 4:
            let fount = cRectangular(a, b);
            console.log(fount);
            break;
        case 5:
            console.log("Cảm ơn bạn đã sử dụng chương trình");
            break;
        default:
            console.log("Lựa chọn của bạn không hợp lệ");
    }
}
function sCircle(s) {
    s = +prompt("Mời bạn nhập r:");
    return 3.14 * s ** 2;
}
function cPerimeter(c) {
    c = +prompt("Mời bạn nhập r:");
    return c * 2 * 3.14;
}
function sRectangular(n, m) {
    n = +prompt("Mời bạn nhập số a");
    m = +prompt("Mời bạn nhập số b");
    return n * m;
}
function cRectangular(n, m) {
    n = +prompt("Mời bạn nhập số a");
    m = +prompt("Mời bạn nhập số b");
    return (n + m) * 2;
}