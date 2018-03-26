describe('Account', () => {
  let account, testDate;
  beforeEach(() => {
    account = new Account(100);
    testDate = new Date(2017, 7, 22);
    jasmine.clock().mockDate(testDate);
  });

  describe('when initial balance provided', () => {
    it('stores transaction object for initial balance', () => {
      expect(account.balance).toEqual(100);
      expect(account.transactions.length).toEqual(1);
    });
  });

  describe('when initial balance not provided', () => {
    it('does not store a transaction object and does not change balance', () => {
      const accountNoBalanceGiven = new Account();

      expect(accountNoBalanceGiven.balance).toEqual(0);
      expect(accountNoBalanceGiven.transactions.length).toEqual(0);
    });
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

      expect(account.transactions[0]).toEqual(testWithdrawal);
    });

    it('throws "Amount must be positive" error if amount <= 0', () => {
      const errorMessage = 'Amount must be positive';
      expect(() => {account.withdraw(0)}).toThrowError(errorMessage);
    });

    it('throws "Funds too low" error if amount > current balance', () => {
      const errorMessage = 'Funds too low';
      expect(() => {account.withdraw(200)}).toThrowError(errorMessage);
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

    it('throws "Amount must be positive" error if amount <= 0', () => {
      const errorMessage = 'Amount must be positive';
      expect(() => {account.deposit(0)}).toThrowError(errorMessage);
    });
  });
});
