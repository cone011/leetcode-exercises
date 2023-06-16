var fizzBuzz = function (n) {
  let strArray = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      strArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      strArray.push("Fizz");
    } else if (i % 5 === 0) {
      strArray.push("Buzz");
    } else {
      strArray.push(i.toString());
    }
  }
  return strArray;
};
