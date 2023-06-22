var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  let sum = 0;
  while (start < end) {
    sum = numbers[start] + numbers[end];
    if (sum === target) return [start + 1, end + 1];
    if (target > sum) {
      start = start + 1;
    } else {
      end = end - 1;
    }
  }
  return [];
};
