describe("Account", () => {
  it('accepts an initial balance', () => {
    let account = new Account(100);

    expect(account.balance).toEqual(100);
  });
});
