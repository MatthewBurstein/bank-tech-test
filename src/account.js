function Account(initialBalance = 0) {
  this.balance = initialBalance;
  this.transactions = [];
}

Account.prototype.withdraw = function withdraw(amount) {
  this._transaction(-amount);
};

Account.prototype.deposit = function deposit(amount) {
  this.balance += amount;
};

Account.prototype._transaction = function _transaction(amount) {
  this.balance += amount;
  const transaction = {
    amount: amount,
    resultingBalance: this.balance,
    date: Date(),
  };
  this.transactions.push(transaction);
};
