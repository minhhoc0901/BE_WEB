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
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountNumber, balance, interesstRate) {
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.interesstRate = interesstRate;
        return _this;
    }
    SavingsAccount.prototype.calculateInterest = function () {
        return this.balance * this.interesstRate / 100;
    };
    return SavingsAccount;
}(BankAccount));
var savingsAccount = new SavingsAccount("123456789", 1000, 5);
savingsAccount.deposit(500);
savingsAccount.withdraw(200);
console.log("S\u1ED1 d\u01B0 t\u00E0i kho\u1EA3n: ".concat(savingsAccount.getBalance()));
console.log("L\u00E3i su\u1EA5t: ".concat(savingsAccount.calculateInterest(), "%"));
