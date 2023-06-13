var sortArray = function (nums) {
  function merge(arr1, arr2) {
    let result = [];
    let i,
      j = 0;
    /*first I made a while with a condition which 
    the first and second array come to the end*/
    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  }
  function mergeSort(nums) {
    if (nums.length <= 1) return nums;
    let middle = Math.floor(nums.length / 2);
    let right = mergeSort(nums.slice(0, middle));
    let left = mergeSort(nums.slice(middle));
    return merge(right, left);
  }
  return mergeSort(nums);
};
