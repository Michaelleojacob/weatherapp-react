const images = new Map([
  ['Clear', '/assets/images/sun.png'],
  ['Clouds', '/assets/images/cloudy.png'],
  ['Rain', '/assets/images/rain.png'],
  ['Snow', '/assets/images/snow.png'],
  ['Thunder', '/assets/images/thunder.png'],
]);

const getBackground = (condition) =>
  images.has(condition) ? images.get(condition) : images.get('Clear');

export default getBackground;
