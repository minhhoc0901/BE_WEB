
class Student{
    private name: string;
    private age: number;
    private grade: string;

    constructor(name: string, age: number, grade: string) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }


    // Phương thức hiển thị thông tin sinh viên
    public displayInfo(): void {
        console.log(`Tên: ${this.name}, Tuổi: ${this.age}, Lớp: ${this.grade}`);
    }

}

const student1 = new Student("Nguyen Van A", 20, "CSE");
student1.displayInfo();