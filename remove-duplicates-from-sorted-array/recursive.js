/*The recursive way work you can test it in a javascript compiler
the problem is leetcode dont reconize the solution*/
var removeDuplicates = function (nums) {
  let numbObject = {};
  let returnArr = [];
  let currentValue;
  function recuriseWay(nums) {
    if (nums.length === 0) return returnArr;
    currentValue = nums[0];
    if (!numbObject[currentValue]) {
      returnArr.push(currentValue);
      numbObject[currentValue] = true;
    }
    return recuriseWay(nums.slice(1));
  }
  nums = recuriseWay(nums);
};
