var runningSum = function (nums) {
  let total = 0;
  let sumArr = [];
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    sumArr.push(total);
  }
  return sumArr;
};

var runningSum = function (nums) {
  let sumArr = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    sumArr.push(sumArr[i - 1] + nums[i]);
  }
  return sumArr;
};
