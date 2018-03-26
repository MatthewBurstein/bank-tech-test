describe('Account', () => {
  let account;
  beforeEach(() => {
    account = new Account(100);
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

    it('adds an object to the accounts transactions', () => {
      expect(account.transactions.length).toEqual(1);
    });
  });

  describe('deposit', () => {
    it('adds the amount to the balance', () => {
      account.deposit(10);

      expect(account.balance).toEqual(110);
    });
  });
});
