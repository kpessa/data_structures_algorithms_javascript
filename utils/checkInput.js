const checkForInteger = require('./checkForInteger');

const checkInput = input => {
  if (input === null) return true;
  if (!checkForInteger(input)) throw new Error('Expecting an <Integer>, received something else');
};

module.exports = checkInput;
