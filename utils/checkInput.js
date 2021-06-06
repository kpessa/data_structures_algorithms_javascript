const checkForInteger = require('./checkForInteger');

const checkInput = input => {
  if (!checkForInteger(input)) throw new Error('Expecting an <Integer>, received something else');
};

module.exports = checkInput;
