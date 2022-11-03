const kelvinToCal = (kelvin) => Math.floor(kelvin - 273);

const kelvinToFah = (kelvin) => Math.floor(((kelvin - 273) * 9) / 5 + 32);

const convertTemp = (kelvin) => [kelvinToCal(kelvin), kelvinToFah(kelvin)];

export default convertTemp;
