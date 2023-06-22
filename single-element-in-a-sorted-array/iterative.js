var singleNonDuplicate = function (nums) {
  let start = 0;
  let end = nums.length;
  let middle;
  let currentValue;
  while (start < end) {
    middle = Math.floor((start + end) / 2);
    middle = middle % 2 !== 0 ? middle - 1 : middle;
    currentValue = nums[middle];
    if (currentValue !== nums[middle - 1] && currentValue !== nums[middle + 1])
      return nums[middle];
    if (currentValue === nums[middle - 1]) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
};

/*PENSAR CON OBJETOS*/
