var largestAltitude = function (gain) {
  let sum,
    max = 0;
  for (let i = 0; i < gain.length; i++) {
    sum += gain[i];
    if (sum > max) max = sum;
  }
};
