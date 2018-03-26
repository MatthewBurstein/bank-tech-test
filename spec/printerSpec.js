describe('printer.js', () => {
  let testAccount, transaction1, transaction2, transaction1PrintString, transaction2PrintString, printHeadersString, testAccountPrintString;
  beforeAll(() => {
    transaction1 = {
      amount: 9,
      resultingBalance: 109,
      date: new Date(2016, 4, 22),
    };
    transaction2 = {
      amount: -7,
      resultingBalance: 102,
      date: new Date(2017, 6, 18),
    };

    testAccount = {
      transactions: [transaction1, transaction2],
    };

    transaction1PrintString = '22/04/2016 || 9.00 || || 109.00';
    transaction2PrintString = '18/06/2017 || || 7.00 || 102.00';
    printHeadersString = 'date || credit || debit || balance';
    testAccountPrintString = [printHeadersString, transaction2PrintString, transaction1PrintString].join('\n');
  });

  describe('#accountPrinter()', () => {
    it('returns the correct string for a given account', () => {
      expect(accountPrinter(testAccount)).toEqual(testAccountPrintString);
    });
  });

  describe('#transactionPrinter()', () => {
    it('returns the correct string for a given transaction', () => {
      expect(transactionPrinter(transaction1)).toEqual(transaction1PrintString);
      expect(transactionPrinter(transaction2)).toEqual(transaction2PrintString);
    });
  });
});
