const icons = new Map([
  ['Clear', '/assets/icons/sun.png'],
  ['Clouds', '/assets/icons/cloudy.png'],
  ['Rain', '/assets/icons/rain.png'],
  ['Snow', '/assets/icons/snow.png'],
  ['Thunder', '/assets/icons/thunder.png'],
]);

const getIcon = (condition) =>
  icons.has(condition) ? icons.get(condition) : icons.get('Clear');

export default getIcon;
