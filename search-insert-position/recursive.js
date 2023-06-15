var searchInsert = function (nums, target) {
  let currentValue, middle;
  function searchTheMost(nums, target, initial, end) {
    if (initial > end) return initial;
    middle = Math.floor((initial + end) / 2);
    currentValue = nums[middle];
    if (target === currentValue) return middle;
    if (target < currentValue)
      return searchTheMost(nums, target, initial, middle - 1);
    if (target > currentValue)
      return searchTheMost(nums, target, middle + 1, end);
  }
  return searchTheMost(nums, target, 0, nums.length - 1);
};
