var countNegatives = function (grid) {
  let flatArray = grid.flat();
  let negativeCount = 0;
  for (let i = 0; i < flatArray.length; i++) {
    if (flatArray[i] < 0) negativeCount++;
  }
  return negativeCount;
};
