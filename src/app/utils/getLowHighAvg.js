const LowHiAvg = (arr) => {
  const dayData = [];

  const icons = new Map();
  const conditions = new Map();

  for (let segment of arr) {
    const { main, icon } = segment.weather[0];
    conditions.has(main)
      ? conditions.set(main, conditions.get(main) + 1)
      : conditions.set(main, 1);

    icons.has(icon) ? icons.set(icon, icons.get(icon) + 1) : icons.set(icon, 1);

    dayData.push(Math.floor(segment.main.temp_min));
    dayData.push(Math.floor(segment.main.temp_max));
  }
  const icon = getHighestCount(icons.entries());
  const condition = getHighestCount(conditions.entries());

  const low = Math.min(...dayData);
  const high = Math.max(...dayData);
  const avg = Math.floor((high + low) / 2);

  return { low, high, avg, icon, condition };
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
