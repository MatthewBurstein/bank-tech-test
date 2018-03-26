function Account(initialBalance = 0) {
  this.balance = initialBalance;
  this.transactions = [];
}

Account.prototype.withdraw = function withdraw(amount) {
  this.balance -= amount;
  const transaction = {
    amount,
    resultingBalance: this.balance,
    date: Date(),
  };
  this.transactions.push(transaction);
};

Account.prototype.deposit = function deposit(amount) {
  this.balance += amount;
};
