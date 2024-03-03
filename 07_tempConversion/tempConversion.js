const convertToCelsius = (fahrenheit) => {
    return Math.round((fahrenheit-32)*50/9)/10;
};

const convertToFahrenheit = (celsius) => {
    return Math.round((320+celsius*90/5))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
