const LowHiAvg = (arr) => {
  const dayData = [];
  const condition = new Map();
  const icons = new Map();
  for (let segment of arr) {
    // console.log(segment);

    condition.has(segment.weather[0].main)
      ? condition.set(
          segment.weather[0].main,
          condition.get(segment.weather[0].main) + 1
        )
      : condition.set(segment.weather[0].main, 0);

    icons.has(segment.weather[0].icon)
      ? icons.set(
          segment.weather[0].icon,
          icons.get(segment.weather[0].icon) + 1
        )
      : icons.set(segment.weather[0].icon, 0);

    dayData.push(Math.floor(segment.main.temp_min));
    dayData.push(Math.floor(segment.main.temp_max));
  }
  const low = Math.min(...dayData);
  const high = Math.max(...dayData);
  const avg = Math.floor((high + low) / 2);
  return { low, high, avg, condition, icons };
};

export default LowHiAvg;
