function Account(initialBalance = 0) {
  this.balance = initialBalance;
  this.transactions = [];
}

Account.prototype.withdraw = function withdraw(amount) {
  const transaction = {};
  this.balance -= amount;
  this.transactions.push(transaction);
};

Account.prototype.deposit = function deposit(amount) {
  this.balance += amount;
};
