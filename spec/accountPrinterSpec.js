describe('#accountPrinter', () => {
  let testAccount, transaction1, transaction2, testAccountPrintString, testDate1, testDate2;
  beforeAll(() => {
    testDate1 = new Date(2016, 4, 22);
    testDate2 = new Date(2017, 6, 18);
    transaction1 = {
      amount: 9,
      resultingBalance: 109,
      date: testDate1,
    };
    transaction2 = {
      amount: -7,
      resultingBalance: 102,
      date: testDate2,
    };

    testAccount = {
      transactions: [transaction1, transaction2],
    };

    testAccountPrintString = 'date || credit || debit || balance\n' +
                             '18/06/2017 || || 7.00 || 102.00\n' +
                             '22/04/2016 || 9.00 || || 109.00';
  });

  it('returns the correct string for a given account', () => {
    expect(accountPrinter(testAccount)).toEqual(testAccountPrintString);
  });
});
