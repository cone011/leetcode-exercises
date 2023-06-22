var missingNumber = function (nums) {
  function binarySearch(arr, item) {
    let start = 0;
    let end = arr.length;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== item && start <= end) {
      if (arr[middle] < item) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === item ? true : false;
  }
  function recurisveWay(arr) {
    if (arr.length === 0) return 0;
    if (!binarySearch(arr, arr[0])) return arr[0];
    return recurisveWay(arr.slice(0));
  }
  return recurisveWay(nums.sort((a, b) => a - b));
};
