const icons = new Map([
  ["Clear", "/assets/icons/sun.png"],
  ["Clouds", "/assets/icons/cloudy.png"],
  ["Rain", "/assets/icons/rain.png"],
  ["Snow", "/assets/icons/snow.png"],
  ["Thunder", "/assets/icons/thunder.png"],
]);

const getIcon = (condition) => {
  return icons.has(condition) ? icons.get(condition) : false;
};

export default getIcon;
