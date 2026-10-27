class Employee {
    constructor(id, name, baseSalary) {
        this.id = id;
        this.name = name;
        this.baseSalary = baseSalary;
    }
    calculateSalary() {
        return this.baseSalary;
    }
}
const employee = new Employee(1, "Nguyễn Văn A", 10000000);
console.log(employee.calculateSalary());

class Developer extends Employee {
    constructor(id, name, baseSalary, overtimeHours) {
        super(id, name, baseSalary);
        this.overtimeHours = overtimeHours;
    }
    calculateSalary() {
        return this.baseSalary + this.overtimeHours * 200000;
    }
}
const developer = new Developer(2, "Trần Thị B", 12000000, 10);
console.log(developer.calculateSalary());

class Manager extends Employee {
    constructor(id, name, baseSalary, bonus) {
        super(id, name, baseSalary);
        this.bonus = bonus;
    }

    calculateSalary() {
        return this.baseSalary + this.bonus;
    }
}
const manager = new Manager(3, "Lê Văn C", 20000000, 5000000);
console.log(manager.calculateSalary());

const employees = [
    new Developer(1, "Nguyễn Văn A", 12000000, 10),
    new Developer(2, "Trần Thị B", 15000000, 5),
    new Manager(3, "Lê Văn C", 20000000, 5000000),
    new Manager(4, "Phạm Thị D", 18000000, 3000000)
];

function calculateTotalSalary(employeeList) {
    let totalSalary = 0;
    for (const employee of employeeList) {
        totalSalary += employee.calculateSalary();
    }
    return totalSalary;
}
const totalSalary = calculateTotalSalary(employees);
console.log(totalSalary);


// bài

function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();

    const diff = now.getTime() - date.getTime();

    // Đổi mili giây thành giây
    const seconds = Math.floor(diff / 1000);

    // Nếu dưới 1 phút
    if (seconds < 60) {
        return "Vừa xong";
    }

    // Đổi giây thành phút
    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) {
        return `${minutes} phút trước`;
    }

    // Đổi phút thành giờ
    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
        return `${hours} giờ trước`;
    }

    // Định dạng DD/MM/YYYY
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

console.log(timeAgo("2026-09-20T14:59:30+07:00"));
console.log(timeAgo("2026-09-20T14:30:00+07:00"));
console.log(timeAgo("2026-09-20T10:00:00+07:00"));
console.log(timeAgo("2026-09-18T08:00:00+07:00"));
