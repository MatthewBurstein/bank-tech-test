describe('printer.js', () => {
  let testAccount, transaction1, transaction2, transaction1PrintString, transaction2PrintString, printHeadersString, testAccountPrintString;
  beforeAll(() => {
    transaction1 = {
      amount: 9,
      resultingBalance: 109,
      date: new Date(2016, 11, 22),
    };
    transaction2 = {
      amount: -7,
      resultingBalance: 102,
      date: new Date(2017, 06, 03),
    };

    testAccount = {
      transactions: [transaction2, transaction1],
    };
    printHeadersString = 'date || credit || debit || balance';
    transaction1PrintString = '22/12/2016 || 9.00 || || 109.00';
    transaction2PrintString = '03/07/2017 || || 7.00 || 102.00';
    testAccountPrintString = [printHeadersString, transaction2PrintString, transaction1PrintString].join('\n');
  });

  describe('#accountPrinter()', () => {
    it('returns the correct string for a given account', () => {
      expect(accountPrinter(testAccount)).toEqual(testAccountPrintString);
    });
  });

  describe('#transactionPrinter()', () => {
    it('returns the correct string for a given transaction', () => {
      const transaction1StringWithHeaders = `${printHeadersString}\n${transaction1PrintString}`;
      const transaction2StringWithHeaders = `${printHeadersString}\n${transaction2PrintString}`;

      expect(transactionPrinter(transaction1)).toEqual(transaction1StringWithHeaders);
      expect(transactionPrinter(transaction2)).toEqual(transaction2StringWithHeaders);
    });
  });
});
