const checkForInteger = input => {
  if (!Number(input)) return false;
  if (input % 1) return false;
  return true;
};

module.exports = checkForInteger;
