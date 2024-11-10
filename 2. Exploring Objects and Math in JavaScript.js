// Task 1

function Account(accountNumber, owner, initialBalance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initialBalance;
}

// Task 2

Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Successfully deposited $${amount}. New balance: $${this.balance}`);
    } else {
        console.log('Deposit amount must be greater than zero.');
    }
};

Account.prototype.withdraw = function(amount) {
    if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Successfully withdrew $${amount}. New balance: $${this.balance}`);
    } else {
        console.log('Insufficient funds or invalid withdrawal amount.');
    }
};


// Task 3

Account.prototype.calculateCompoundInterest = function(rate, periods) {
    const compoundRate = 1 + rate;
    const compoundInterest = this.balance * Math.pow(compoundRate, periods) - this.balance;
    console.log(`Calculated compound interest: $${compoundInterest.toFixed(2)}`);
    return compoundInterest;
};
