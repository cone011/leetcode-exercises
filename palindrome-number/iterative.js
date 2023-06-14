var isPalindrome = function (x) {
  let convertNumber = x.toString();
  let numberLength = convertNumber.length - 1;
  for (let i = 0; i < numberLength; i++) {
    if (convertNumber[i] !== convertNumber[numberLength - i]) return false;
  }
  return true;
};
