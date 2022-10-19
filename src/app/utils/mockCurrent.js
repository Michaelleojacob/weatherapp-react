const mockCurrent = {
  coord: {
    lon: -0.1276,
    lat: 51.5073,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04n",
    },
  ],
  base: "stations",
  main: {
    temp: 284.99,
    feels_like: 284.58,
    temp_min: 283.33,
    temp_max: 286.48,
    pressure: 1026,
    humidity: 90,
  },
  visibility: 10000,
  wind: {
    speed: 4.63,
    deg: 70,
  },
  clouds: {
    all: 100,
  },
  dt: 1666134741,
  sys: {
    type: 2,
    id: 2075535,
    country: "GB",
    sunrise: 1666161049,
    sunset: 1666198792,
  },
  timezone: 3600,
  id: 2643743,
  name: "London",
  cod: 200,
};

export default mockCurrent;
