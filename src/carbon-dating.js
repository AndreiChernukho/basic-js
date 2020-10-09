const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOGOFTWO = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string" && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15) {
    let date = Math.ceil((MODERN_ACTIVITY / parseFloat(sampleActivity)) / LOGOFTWO * HALF_LIFE_PERIOD);
    return date;
  } else return false;
};