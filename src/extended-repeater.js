const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  str = str + '';
  if (options['additionSeparator'] === undefined) options['additionSeparator'] = '|';
  for (let el in options) {
    options[el] = options[el] + '';
  }
  if (options['addition']) {
    if (options['additionRepeatTimes']) {
      for (let i = 0; i < options['additionRepeatTimes']; i++) {
        str += options['addition'];
        if (!(i == options['additionRepeatTimes'] - 1))
          str += options['additionSeparator'];
      }
    }
    else {
      str += options['addition'];
    }
  }
  let temp = str;
  if (options['repeatTimes']) {
    if (options['separator']) {
      for (let i = 0; i < options['repeatTimes'] - 1; i++) {
        str += options['separator'];
        str += temp;
      }
    }
    else {
      options['separator'] = '+';
      for (let i = 0; i < options['repeatTimes'] - 1; i++) {
        str += options['separator'];
        str += temp;
      }
    }
  }

  return str;
};
  
