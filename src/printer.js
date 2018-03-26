const accountPrinter = function(account) {

};

const transactionPrinter = function transactionPrinter(transaction) {
  const output = [];
  const date = _dateConverter(transaction.date);
  output.push(date);
  output.push(_createTransactionString(transaction.amount))
  output.push(_padCurrencyString(transaction.resultingBalance));
  return output.join(' || ').replace('  ', ' ');
};

const _dateConverter = function _dateConverter(date) {
  const day = _ensureDoubleDigit(date.getDate());
  const month = _ensureDoubleDigit(date.getMonth());
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

const _createTransactionString = function _createTransactionString(number) {
  let transactionString;
  if (number > 0) {
    transactionString = `${_padCurrencyString(number)} ||`;
  } else {
    transactionString = `|| ${_padCurrencyString(-number)}`;
  }
  return transactionString;
};

const _padCurrencyString = function _addTrailingZeroes(number) {
  return Number(number).toFixed(2);
};
