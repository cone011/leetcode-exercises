var countNegatives = function (grid) {
  function recursiveWay(arr, countNegative) {
    if (arr.length === 0) return countNegative;
    if (arr[0] < 0) countNegative++;
    return recursiveWay(arr.slice(0), countNegative);
  }
  return recursiveWay(grid.flat(), 0);
};
