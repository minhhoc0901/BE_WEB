
class Employee {
    private name: string;
    private position: string;
    private salary: number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getName(): string {
        return this.name;
    }

    getPosition(): string {
        return this.position;
    }

    getSalary(): number {
        return this.salary;
    }
}

class Manager extends Employee {
    

    constructor(name: string, position: string, salary: number, ) {
        super(name, position, salary);
        
    }

    getDetails(): string {
        return `Manager: ${this.getName()}, Position: ${this.getPosition()}, Salary: ${this.getSalary()}`;
    }
}

class Developer extends Employee {
    

    constructor(name: string, position: string, salary: number) {
        super(name, position, salary);
        
    }

    getDetails(): string {
        return `Developer: ${this.getName()}, Position: ${this.getPosition()}, Salary: ${this.getSalary()}  `;
    }
}

const manager = new Manager("Alice", "Project Manager", 80000);
const developer = new Developer("Bob", "Software Engineer", 60000);
console.log(manager.getDetails());
console.log(developer.getDetails());
