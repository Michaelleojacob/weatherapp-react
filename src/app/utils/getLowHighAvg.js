const LowHiAvg = (arr) => {
  const dayData = [];

  const icons = new Map();

  for (let segment of arr) {
    icons.has(segment.weather[0].icon)
      ? icons.set(
          segment.weather[0].icon,
          icons.get(segment.weather[0].icon) + 1
        )
      : icons.set(segment.weather[0].icon, 0);

    dayData.push(Math.floor(segment.main.temp_min));
    dayData.push(Math.floor(segment.main.temp_max));
  }
  const icon = getHighestCount(icons.entries());

  const low = Math.min(...dayData);
  const high = Math.max(...dayData);
  const avg = Math.floor((high + low) / 2);

  return { low, high, avg, icon };
};

export default LowHiAvg;

const getHighestCount = (map) => {
  let high = 0;
  let keyPair;
  for (const [key, val] of map) {
    if (val >= high) {
      high = val;
      keyPair = key;
    }
  }
  return keyPair;
};
