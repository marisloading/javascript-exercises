const repeatString = function (string, num) {
  let multiString = "";

  if (num < 0) {
    multiString = "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      multiString += string;
    }
  }

  return multiString;
};

// Do not edit below this line
module.exports = repeatString;
