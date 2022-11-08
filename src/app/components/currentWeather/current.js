import mockCurrent from "../../utils/mockCurrent";
import convertTemp from "../../utils/convertTemp";

const CurrentWeather = ({ currentWeather, isImperial }) => {
  const { main } = mockCurrent;
  console.log(mockCurrent);
  const mainTemp = convertTemp(main.temp);
  const lowTemp = convertTemp(main.temp_min);
  const highTemp = convertTemp(main.temp_max);
  // const feelsLike = convertTemp(main.feels_like);

  return (
    <div className="current-container">
      <div>{mockCurrent.name}</div>
      {/* <img
        className="current-icon"
        src={`https://openweathermap.org/img/wn/${mockCurrent.weather[0].icon}@2x.png`}
        alt="weather icon"
      /> */}
      <div className="current-main">
        {isImperial ? mainTemp[0] : mainTemp[1]}
        <span className="deg">&deg;</span>
      </div>
      <div>{mockCurrent.weather[0].main}</div>
      <div className="current-low-hi">
        <div className="low">
          L:{isImperial ? lowTemp[0] : lowTemp[1]}
          <span className="deg">&deg;</span>
        </div>
        <div className="high">
          H:{isImperial ? highTemp[0] : highTemp[1]}
          <span className="deg">&deg;</span>
        </div>
      </div>
      {/* <div>feels like: {isImperial ? feelsLike[0] : feelsLike[1]}<span className='deg'>&deg;</span></div> */}
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
