var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getPosition = function () {
        return this.position;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, position, salary) {
        return _super.call(this, name, position, salary) || this;
    }
    Manager.prototype.getDetails = function () {
        return "Manager: ".concat(this.getName(), ", Position: ").concat(this.getPosition(), ", Salary: ").concat(this.getSalary());
    };
    return Manager;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, position, salary) {
        return _super.call(this, name, position, salary) || this;
    }
    Developer.prototype.getDetails = function () {
        return "Developer: ".concat(this.getName(), ", Position: ").concat(this.getPosition(), ", Salary: ").concat(this.getSalary(), "  ");
    };
    return Developer;
}(Employee));
var manager = new Manager("Alice", "Project Manager", 80000);
var developer = new Developer("Bob", "Software Engineer", 60000);
console.log(manager.getDetails());
console.log(developer.getDetails());
