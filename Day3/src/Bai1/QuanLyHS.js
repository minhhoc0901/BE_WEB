var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    // Phương thức hiển thị thông tin sinh viên
    Student.prototype.displayInfo = function () {
        console.log("T\u00EAn: ".concat(this.name, ", Tu\u1ED5i: ").concat(this.age, ", L\u1EDBp: ").concat(this.grade));
    };
    return Student;
}());
var student1 = new Student("Nguyen Van A", 20, "CSE");
student1.displayInfo();
