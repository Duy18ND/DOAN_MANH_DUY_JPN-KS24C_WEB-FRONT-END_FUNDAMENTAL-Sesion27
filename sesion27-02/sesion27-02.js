let arr = [];
let choice;
let menu = `
    1. Nhập danh sách sinh viên.
    2. Hiển thị danh sách sinh viên.
    3. Tìm sinh viên theo tên.
    4. Xóa sinh viên khỏi danh sách.
    5. Thoát.
`;

while (choice !== 5) {
    choice = +prompt(menu);


    if (isNaN(choice) || !Number.isInteger(choice) || choice <= 0) {
        alert("Vui lòng nhập một số hợp lệ từ 1 đến 5!");
        continue;
    }

    switch (choice) {
        case 1:
            case1(arr);
            break;
        case 2:
            alert(case2(arr));
            break;
        case 3:
            case3(arr);
            break;
        case 4:
            case4(arr);
            break;
        case 5:
            alert("Thoát chương trình!");
            break;
        default:
            alert("Vui lòng chọn một số từ 1 đến 5!");
    }
}


function case1(arr) {
    let n = +prompt("Mời bạn nhập số lượng sinh viên:");

    if (isNaN(n) || !Number.isInteger(n) || n <= 0) {
        alert("Số lượng không hợp lệ!");
        return;
    }

    for (let i = 0; i < n; i++) {
        let name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`).trim();

        if (name && !arr.includes(name)) { // Kiểm tra tránh nhập trùng
            arr.push(name);
        } else {
            alert("Tên không hợp lệ hoặc đã tồn tại, vui lòng nhập lại!");
            i--; // Yêu cầu nhập lại nếu tên không hợp lệ
        }
    }
}


function case2(arr) {
    if (arr.length === 0) {
        return "Danh sách sinh viên trống!";
    }
    let result = arr.map((name, index) => `ID: ${index + 1}. ${name}`).join(("\n"));
    return result;
}

function case3(arr) {
    if (arr.length === 0) {
        alert("Danh sách sinh viên trống!");
        return;
    }

    let keyword = prompt("Nhập tên sinh viên cần tìm:").trim().toLowerCase();
    let result = arr.filter(name => name.toLowerCase().includes(keyword));

    if (result.length > 0) {
        alert("Kết quả tìm kiếm:\n" + result.join("\n"));
    } else {
        alert("Không tìm thấy sinh viên!");
    }
}

function case4(arr) {
    if (arr.length === 0) {
        alert("Danh sách sinh viên trống!");
        return;
    }

    let nameToDelete = prompt("Nhập tên sinh viên cần xóa:").trim();
    let index = arr.findIndex(name => name.toLowerCase() === nameToDelete.toLowerCase());

    if (index !== -1) {
        arr.splice(index, 1);
        alert(`Đã xóa sinh viên "${nameToDelete}" khỏi danh sách.`);
    } else {
        alert("Không tìm thấy sinh viên cần xóa!");
    }
}
