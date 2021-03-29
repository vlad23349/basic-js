const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let commands = ['--double-next', '--double-prev', '--discard-next', '--discard-prev'];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '-') {
      for (let j = 0; j < 4; j++) {
        if (arr[i] == commands[0]) {
          if (i == 0 || i == arr.length - 1) arr.splice(i, 1);
          else {
            arr.splice(i, 1, arr[i + 1]);
            i = 0;
          }

        }
        else if (arr[i] == commands[1]) {
          if (i == 0 || i == arr.length - 1) arr.splice(i, 1);
          else {
            arr.splice(i, 1, arr[i - 1]);
            i = 0;
          }
        }
        else if (arr[i] == commands[2]) {
          if (i == 0 || i == arr.length - 1) arr.splice(i, 1);
          else {
            arr.splice(i + 1, 1);
            arr.splice(i + 1, 1);
            i = 0;
          }

        }
        else if (arr[i] == commands[3]) {
          if (i == 0 || i == arr.length - 1) arr.splice(i, 1);
          else {
            arr.splice(i - 1, 1);
            arr.splice(i - 1, 1);
            i = 0;
          }
        }
      }
    }

  }
  return arr;
};
