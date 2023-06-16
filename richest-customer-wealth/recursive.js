var maximumWealth = function (accounts) {
  let maxValue = accounts[0].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let currentValue;
  function recursiveWay(array) {
    if (array.length === 0) return maxValue;
    currentValue = array[0].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    maxValue = Math.max(maxValue, currentValue);
    recursiveWay(array.slice(1));
  }
  return recursiveWay(accounts.slice(1));
};
