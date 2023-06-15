var removeElement = function (nums, val) {
  let index = nums.findIndex((number) => number === val);

  if (index > -1) {
    nums.splice(index, 1);
    return removeElement(nums, val);
  }
};
