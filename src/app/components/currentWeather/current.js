import mockCurrent from '../../utils/mockCurrent';
import convertTemp from '../../utils/convertTemp';

const CurrentWeather = ({ currentWeather, isImperial }) => {
  const { main } = mockCurrent;
  const mainTemp = convertTemp(main.temp);
  const lowTemp = convertTemp(main.temp_min);
  const highTemp = convertTemp(main.temp_max);
  const feelsLike = convertTemp(main.feels_like);

  return (
    <div>
      <div>{mockCurrent.name}</div>
      <img
        src={`https://openweathermap.org/img/wn/${mockCurrent.weather[0].icon}@2x.png`}
        alt='weather icon'
      />
      <div>{isImperial ? mainTemp[0] : mainTemp[1]}&deg;</div>
      <div>
        <div>L {isImperial ? lowTemp[0] : lowTemp[1]}&deg;</div>
        <div>H {isImperial ? highTemp[0] : highTemp[1]}&deg;</div>
      </div>
      <div>feels like: {isImperial ? feelsLike[0] : feelsLike[1]}&deg;</div>
    </div>
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
