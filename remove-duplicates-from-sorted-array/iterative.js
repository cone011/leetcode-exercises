var removeDuplicates = function (nums) {
  let currentValue, nextValue;
  for (let i = 0; i < nums.length; i++) {
    currentValue = nums[i];
    nextValue = nums[i + 1];
    if (currentValue == nextValue) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
};
