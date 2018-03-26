describe('Account', () => {
  let account, testDate;
  beforeEach(() => {
    account = new Account(100);
    testDate = new Date(2017, 07, 22);
    jasmine.clock().mockDate(testDate);
  });

  it('accepts an initial balance', () => {
    expect(account.balance).toEqual(100);
  });

  it('has initial balance 0 if none is given', () => {
    const accountNoBalanceGiven = new Account();

    expect(accountNoBalanceGiven.balance).toEqual(0);
  });

  describe('withdraw', () => {

    beforeEach(() => {
      account.withdraw(10);
    });

    it('subtracts the amount from the balance', () => {
      expect(account.balance).toEqual(90);
    });

    it('adds a transaction to the accounts transactions', () => {
      expect(account.transactions.length).toEqual(1);
    });

    it('stores the amount of the withdrawal in the transaction object', () => {
      expect(account.transactions[0].amount).toEqual(-10);
    });

    it('stores the resulting balance in the transaction object', () => {
      expect(account.transactions[0].resultingBalance).toEqual(90);
    });

    it('stores the current date in the transaction object', () => {
      expect(account.transactions[0].date).toEqual(testDate);
    });
  });

  describe('deposit', () => {
    it('adds the amount to the balance', () => {
      account.deposit(10);

      expect(account.balance).toEqual(110);
    });
  });
});
