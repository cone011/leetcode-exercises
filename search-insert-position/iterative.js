var searchInsert = function (nums, target) {
  let currentValue;
  for (let i = 0; i < nums.length; i++) {
    currentValue = nums[i];
    if (currentValue === target) return i;
    if (currentValue > target) return i;
    if (target > currentValue && i === nums.length - 1) return nums.length;
  }
};
