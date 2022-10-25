const kelvinToCal = (kelvin) => Math.floor(kelvin - 273);

const kelvinToFah = (kelvin) => Math.floor(((kelvin - 273) * 9) / 5 + 32);

export { kelvinToCal, kelvinToFah };

export class TodaysWeather {
  constructor(obj, name) {
    this.name = name;
    this.icon = obj.weather[0].icon;
    this.main_f = kelvinToFah(obj.weahter.main.temp);
    this.low_f = kelvinToFah(obj.main.temp_min);
    this.high_f = kelvinToFah(obj.main.temp_max);
    this.feels_like_f = kelvinToFah(obj.main.feels_like);
    this.main_c = kelvinToCal(obj.weahter.main.temp);
    this.low_c = kelvinToCal(obj.main.temp_min);
    this.high_c = kelvinToCal(obj.main.temp_max);
    this.feels_like_c = kelvinToCal(obj.main.feels_like);
  }
}
