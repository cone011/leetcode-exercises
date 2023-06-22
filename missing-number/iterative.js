var missingNumber = function (nums) {
  let count = 0;
  function binarySearch(arr, item) {
    let start = 0;
    let end = arr.length;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== item && start <= end) {
      if (item < arr[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === item ? true : false;
  }
  while (true) {
    if (!binarySearch(arr, count)) return count;
    count++;
  }
};
