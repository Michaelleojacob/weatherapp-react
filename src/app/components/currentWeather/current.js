import mockCurrent from "../../utils/mockCurrent";

const CurrentWeather = ({ loading, currentWeather }) => {
  return (
    <>
      <div>{mockCurrent.name}</div>
      <img
        src={`https://openweathermap.org/img/wn/${mockCurrent.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <div>{mockCurrent.main.temp}</div>
      <div>
        <div>low: {mockCurrent.main.temp_min}</div>
        <div>high: {mockCurrent.main.temp_max}</div>
        <div>humidity: {mockCurrent.main.humidity}</div>
        <div>feels like: {mockCurrent.main.feels_like}</div>
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
