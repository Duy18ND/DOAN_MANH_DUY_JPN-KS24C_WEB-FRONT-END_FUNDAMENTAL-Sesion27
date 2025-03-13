let menu = `
1. Nhập danh sách số nguyên.
2. Tính trung bình các số.
3. Tìm số chẵn lớn nhất.
4. Tìm số lẻ nhỏ nhất.
5. Thoát.
`;

let choice = 0;
let arr = [];

while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            arrAdd(arr);
            break;
        case 2:
            console.log(average(arr));
            break;
        case 3:
            console.log(arrMax(arr));
            break;
        case 4:
            console.log(arrMin(arr));
            break;
        case 5:
            console.log("Cảm ơn bạn đã sử dụng chương trình");
            break;
        default:
            console.log("Lựa chọn của bạn không hợp lệ!");
    }
}

function arrAdd(arr) {
    let number = +prompt("Nhập số lượng phần tử cần thêm vào mảng");
    if (!Number.isInteger(number) || isNaN(number) || number <= 0) {
        alert("Số lượng phần tử không hợp lệ!");
        return;
    }

    for (let i = 0; i < number; i++) {
        let index = +prompt(`Nhập arr[${i}]: `);
        if (!isNaN(index)) {
            arr.push(index);
        } else {
            alert("Phần tử nhập vào không hợp lệ, vui lòng nhập lại!");
            i--;
        }
    }

    alert(`Thêm thành công ${number} phần tử vào mảng`);
}

function average(arr) {
    if (arr.length === 0) {
        return "Mảng hiện tại trống!";
    }

    let sum = arr.reduce((acc, num) => acc + num, 0);
    let result = (sum / arr.length).toFixed(2);

    return `Trung bình các số nguyên trong mảng là: ${result}`;
}

function arrMax(arr) {
    let evenNumbers = arr.filter(num => num % 2 === 0);
    if (evenNumbers.length === 0) {
        return "Không có số chẵn trong mảng";
    }
    return `Số chẵn lớn nhất là: ${Math.max(...evenNumbers)}`;
}

function arrMin(arr) {
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    if (oddNumbers.length === 0) {
        return "Không có số lẻ trong mảng";
    }
    return `Số lẻ nhỏ nhất là: ${Math.min(...oddNumbers)}`;
}
