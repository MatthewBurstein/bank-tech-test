describe('Account', () => {
  let account, testDate;
  beforeEach(() => {
    account = new Account(100);
    testDate = new Date(2017, 7, 22);
    jasmine.clock().mockDate(testDate);
  });

  describe('when initial balance provided', () => {
    it('calls this.deposit(initialBalance)', () => {
      expect(account.balance).toEqual(100);
      expect(account.transactions.length).toEqual(1);
    });
  });

  it('has initial balance 0 if none is given', () => {
    const accountNoBalanceGiven = new Account();

    expect(accountNoBalanceGiven.balance).toEqual(0);
  });

  describe('#withdraw()', () => {
    beforeEach(() => {
      account.withdraw(10);
    });

    it('subtracts the amount from the balance', () => {
      expect(account.balance).toEqual(90);
    });

    it("adds a transaction to the account's transactions", () => {
      expect(account.transactions.length).toEqual(2);
    });

    it('stores the date, amount and resulting balance in the transaction object', () => {
      const testWithdrawal = {
        amount: -10,
        resultingBalance: 90,
        date: testDate,
      };
      console.log(account.transactions)
      expect(account.transactions[0]).toEqual(testWithdrawal);
    });
  });

  describe('#deposit()', () => {
    beforeEach(() => {
      account.deposit(10);
    });

    it('adds the amount to the balance', () => {
      expect(account.balance).toEqual(110);
    });

    it("adds a transaction to the account's transactions", () => {
      expect(account.transactions.length).toEqual(2);
    });

    it('stores the date, amount and resulting balance in the transaction object', () => {
      const testDeposit = {
        amount: 10,
        resultingBalance: 110,
        date: testDate,
      };

      expect(account.transactions[0]).toEqual(testDeposit);
    });
  });
});
