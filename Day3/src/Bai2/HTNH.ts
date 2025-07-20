
class BankAccount {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    public deposit(amount: number): void {
        if ( amount > 0) {
            this.balance += amount;
        }
    }
    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }
    public getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    private interesstRate: number;
    constructor(accountNumber: string, balance: number, interesstRate: number) {
        super(accountNumber, balance);
        this.interesstRate = interesstRate;
    }
    public calculateInterest(): number {
        return this.balance * this.interesstRate / 100;
    }
}

const savingsAccount = new SavingsAccount("123456789", 1000, 5);
savingsAccount.deposit(500);
savingsAccount.withdraw(200);
console.log(`Số dư tài khoản: ${savingsAccount.getBalance()}`);
console.log(`Lãi suất: ${savingsAccount.calculateInterest()}%`);