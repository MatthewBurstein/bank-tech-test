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

    it("adds a transaction to the account's transactions", () => {
      expect(account.transactions.length).toEqual(1);
    });

    it('stores the date, amount and resulting balance in the transaction object', () => {
      let testWithdrawal = {
        amount: -10,
        resultingBalance: 90,
        date: testDate
      }

      expect(account.transactions[0]).toEqual(testWithdrawal)
    });
  });

  describe('deposit', () => {

    beforeEach(() => {
      account.deposit(10);
    });

    it('adds the amount to the balance', () => {
      expect(account.balance).toEqual(110);
    });

    it("adds a transaction to the account's transactions", () => {
      expect(account.transactions.length).toEqual(1)
    });

    it('stores the date, amount and resulting balance in the transaction object', () => {
      let testDeposit = {
        amount: 10,
        resultingBalance: 110,
        date: testDate
      }

      expect(account.transactions[0]).toEqual(testDeposit)
    });
  });
});
