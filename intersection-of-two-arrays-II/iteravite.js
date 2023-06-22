var intersect = function (nums1, nums2) {
  let numsObject = {};
  let returnArr = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!numsObject[nums1[i]]) {
      numsObject[nums1[i]] = true;
    }
  }
  for (let item of nums2) {
    if (numsObject[item]) {
      returnArr.push(item);
    }
  }
  return returnArr;
};
