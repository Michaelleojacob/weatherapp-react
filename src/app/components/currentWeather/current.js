import mockCurrent from "../../utils/mockCurrent";
import { kelvinToCal, kelvinToFah } from "../../utils/weatherData";

const CurrentWeather = ({ loading, currentWeather, isImperial }) => {
  console.log(mockCurrent.main.temp);
  const mainF = kelvinToFah(mockCurrent.main.temp);
  const lowF = kelvinToFah(mockCurrent.main.temp_min);
  const highF = kelvinToFah(mockCurrent.main.temp_max);
  const feelsF = kelvinToFah(mockCurrent.main.feels_like);
  const mainC = kelvinToCal(mockCurrent.main.temp);
  const lowC = kelvinToCal(mockCurrent.main.temp_min);
  const highC = kelvinToCal(mockCurrent.main.temp_max);
  const feelsC = kelvinToCal(mockCurrent.main.feels_like);
  return (
    <>
      <div>{mockCurrent.name}</div>
      <img
        src={`https://openweathermap.org/img/wn/${mockCurrent.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <div>{isImperial ? mainC : mainF}</div>
      <div>
        <div>L {isImperial ? lowC : lowF}</div>
        <div>H {isImperial ? highC : highF}</div>
        <div>feels like: {isImperial ? feelsC : feelsF}</div>
      </div>
    </>
  );
};

export default CurrentWeather;

// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// const CurrentWeather = ({ loading, currentWeather }) => {
//   return (
//     <>
//       <div>{loading ? <Skeleton width={70} /> : currentWeather.name}</div>
//     </>
//   );
// };

// export default CurrentWeather;
