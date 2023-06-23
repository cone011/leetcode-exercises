var largestAltitude = function (gain) {
  let sum,
    max = 0;
  function recursiveWay(arr) {
    if (arr.length === 0) return max;
    sum += arr[0];
    if (sum > max) max = sum;
    return recursiveWay(arr.slice(1));
  }
  return recursiveWay(gain);
};
