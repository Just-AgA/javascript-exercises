const convertToCelsius = function(tempFhr) {
  return parseFloat(((tempFhr - 32) * 5/9).toFixed(1))

};

const convertToFahrenheit = function(tempCelc) {
  return parseFloat((tempCelc * 9/5 + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
