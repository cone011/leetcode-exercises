var maximumWealth = function (accounts) {
  let totalSum = [];
  for (let i = 0; i < accounts.length; i++) {
    totalSum.push(accounts[i].reduce((suma, actual) => suma + actual, 0));
  }
  return Math.max(...totalSum);
};

var maximumWealth = function (accounts) {
  let maxValue = accounts[0].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let currentValue;
  for (let i = 1; i < accounts.length; i++) {
    currentValue = accounts[i].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    maxValue = Math.max(maxValue, currentValue);
  }
  return max;
};
