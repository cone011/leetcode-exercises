var isPalindrome = function (x) {
  function recuriseWay(arr) {
    if (arr.length === 0) return true;
    if (arr[0] !== arr[arr.length - 1]) return false;
    return recuriseWay(arr.slice(1, arr.length - 1));
  }
  let convertNumber = x.toString();
  return recuriseWay(convertNumber);
};
