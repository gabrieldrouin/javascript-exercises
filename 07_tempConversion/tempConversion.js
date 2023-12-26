const convertToCelsius = function(fahr) {
  return Math.round(((5/9) * (fahr - 32))*10)/10;
};

const convertToFahrenheit = function(cel) {
  return Math.round(((cel * 1.8) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
