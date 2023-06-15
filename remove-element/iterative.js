var removeElement = function (nums, val) {
  let currentValue;
  for (let i = 0; i < nums.length; i++) {
    currentValue = nums[i];
    if (currentValue === val) {
      nums.splice(i, 1);
      i--;
    }
  }
};
