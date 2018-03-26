function Account(initialBalance) {
  this.balance = 0;
  this.transactions = [];
  if (initialBalance !== undefined) {
    this.deposit(initialBalance);
  }
};

Account.prototype.withdraw = function withdraw(amount) {
  this._transaction(-amount);
};

Account.prototype.deposit = function deposit(amount) {
  this._transaction(amount);
};

Account.prototype._transaction = function _transaction(amount) {
  this.balance += amount;
  const transaction = {
    amount,
    resultingBalance: this.balance,
    date: new Date(),
  };
  this.transactions.unshift(transaction);
};
