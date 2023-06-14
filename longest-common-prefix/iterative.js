var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) return "";
  let firstElement = strs[0];
  let currentValue;
  let outputElement = "";
  for (let i = 0; i < firstElement.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      currentValue = strs[j];
      if (firstElement[i] !== currentValue[i]) return outputElement;
    }
    outputElement += firstElement[i];
  }
  return outputElement;
};
