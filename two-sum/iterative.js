var twoSum = function (numbers, target) {
  let mapObject = {};
  for (let i = 0; i < numbers.length; i++) {
    let currentValue = numbers[i];
    let indexObject = target - currentValue;
    if (mapObject[indexObject] != undefined) {
      return [mapObject[indexObject], i];
    }
    mapObject[currentValue] = i;
  }
};
