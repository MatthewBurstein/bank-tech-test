function Account(initialBalance) {
  this.balance = 0;
  this.transactions = [];
  if (initialBalance !== undefined) {
    this.deposit(initialBalance);
  }
};

Account.prototype.withdraw = function withdraw(amount) {
  this._withdrawalErrorHandling(amount);
  _transactionErrorHandling(amount);
  this._transaction(-amount);
};

Account.prototype.deposit = function deposit(amount) {
  _transactionErrorHandling(amount);
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

Account.prototype._withdrawalErrorHandling = function _withdrawalErrorHandling(amount) {
  if (this.balance < amount) {
    throw new Error('Funds too low');
  }
};

const _transactionErrorHandling = function _transactionErrorHandling(amount) {
  if (amount <= 0) {
    throw new Error('Amount must be positive');
  }
};
