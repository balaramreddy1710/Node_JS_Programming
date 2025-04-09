class Bank {
  constructor(owner, balance = 0) {
    this._owner = owner;
    this._balance = balance;
  }

  deposit(amount) {
    this._balance += amount;
    return `Deposited ${amount}`;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      return `Insufficient Balance`;
    } else {
      this._balance -= amount;
      return `${amount} has been withdrawn`;
    }
  }

  balance() {
    return this._balance;
  }
}

const acc = new Bank("Jack");
console.log(acc.name);
console.log(acc.withdraw(100));
console.log(acc.balance());
console.log(acc.deposit(1000));
console.log(acc.withdraw(100));
console.log(acc.balance());
