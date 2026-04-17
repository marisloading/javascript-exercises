const sumAll = function (min, max) {
  let para = [min, max];
  let sum = 0;

  if (para.some((num) => num < 0 || !Number.isInteger(num))) {
    return "ERROR";
  } else {
    if (min > max) {
      [min, max] = [max, min];
    }
    for (i = max; i > min - 1; i--) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
