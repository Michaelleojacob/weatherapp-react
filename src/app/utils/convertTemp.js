function kelvinToCal(kelvin) {
  return kelvin - 273;
}

function kelvinToFah(kelvin) {
  return Math.floor(((kelvin - 273) * 9) / 5 + 32);
}
