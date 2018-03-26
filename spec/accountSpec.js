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
    it('subtracts the amount from the balance', () => {
      account.withdraw(10);

      expect(account.balance).toEqual(90);
    });
  });
});
