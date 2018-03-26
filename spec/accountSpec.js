describe('Account', () => {
  it('accepts an initial balance', () => {
    const account = new Account(100);

    expect(account.balance).toEqual(100);
  });

  it('has initial balance 0 if none is given', () => {
    const account = new Account();

    expect(account.balance).toEqual(0);
  });
});
