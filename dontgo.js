function convertTemperature() {
  var celsiusInput = document.getElementById('celsius');
  var fahrenheitInput = document.getElementById('ferenite');

  var celsiusValue = parseFloat(celsiusInput.value);
  var fahrenheitValue = parseFloat(fahrenheitInput.value);

  if (!isNaN(celsiusValue)) {
    var fahrenheit = (celsiusValue * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
  } else if (!isNaN(fahrenheitValue)) {
    var celsius = (fahrenheitValue - 32) * 5/9;
    celsiusInput.value = celsius.toFixed(2);
  }
}


