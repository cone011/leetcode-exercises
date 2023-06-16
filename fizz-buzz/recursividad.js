var fizzBuzz = function (n) {
  function recursiveWay(index, array) {
    if (index > n) return array;
    if (index % 3 === 0 && index % 5 === 0) {
      array.push("FizzBuzz");
      return recursiveWay(index + 1, array);
    }
    if (index % 3 === 0) {
      array.push("Fizz");
      return recursiveWay(index + 1, array);
    }
    if (index % 5 === 0) {
      array.push("Buzz");
      return recursiveWay(index + 1, array);
    }
    array.push(index.toString());
    return recursiveWay(index + 1, array);
  }
  return recursiveWay(1, []);
};
