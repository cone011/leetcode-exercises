var lengthOfLastWord = function (s) {
  let result = s.split(/(\s+)/);
  let resultTrim = result.filter((item) => item.trim().length > 0);
  let lastWord = resultTrim[resultTrim.length - 1];
  return lastWord.length;
};
