function Account(initialBalance = 0) {
  this.balance = initialBalance;
}

Account.prototype.withdraw = function withdraw(amount) {
  this.balance -= amount;
};
