var runningSum = function (nums) {
  let sumArr = [];
  let total = 0;
  function recursiveWay(array) {
    if (array.length === 0) return;
    total += array[0];
    sumArr.push(total);
    recursiveWay(array.slice(1));
  }
  recursiveWay(nums);
  return sumArr;
};

var runningSum = function (nums) {
  let sumArr = [nums[0]];
  function recursiveWay(array, index) {
    if (array.length === 0) return;
    sumArr.push(sumArr[index] + array[0]);
    recursiveWay(array.slice(1), index + 1);
  }
  recursiveWay(nums.slice(1), 0);
  return sumArr;
};
