const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) !== 'string' || !parseFloat(sampleActivity) || (parseFloat(sampleActivity) > 15 || parseFloat(sampleActivity) <= 0)) return false;
  return Math.ceil(Math.log(15 / parseFloat(sampleActivity)) / (0.693 / 5730));
};
