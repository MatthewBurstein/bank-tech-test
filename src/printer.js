const printHeaders = ['date', 'credit', 'debit', 'balance'].join(' || ');

const accountPrinter = function accountPrinter(account) {
  const output = account.transactions.map(
    transaction => _transactionPrintString(transaction)
  );
  output.unshift(printHeaders);
  return output.join('\n');
};

const _transactionPrintString = function _transactionPrintString(transaction) {
  const date = _dateConverter(transaction.date);
  const transactionString = _createDebitCreditString(transaction.amount);
  const balanceString = _padCurrencyString(transaction.resultingBalance);
  return [date, transactionString, balanceString].join(' || ');
};

const _dateConverter = function _dateConverter(date) {
  const day = _ensureDoubleDigit(date.getDate());
  const month = _ensureDoubleDigit(date.getMonth() + 1);
  const year = date.getFullYear();
  return [day, month, year].join('/');
};

const _ensureDoubleDigit = function _ensureDoubleDigit(number) {
  let numString = String(number);
  if (number < 10) {
    numString = `0${numString}`;
  }
  return numString;
};

const _createDebitCreditString = function _createDebitCreditString(number) {
  const output = number > 0 ?
    `${_padCurrencyString(number)} ||` :
    `|| ${_padCurrencyString(-number)}`;
  return output;
};

const _padCurrencyString = function _addTrailingZeroes(number) {
  return Number(number).toFixed(2);
};
