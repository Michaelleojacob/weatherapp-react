import mockCurrent from "../../utils/mockCurrent";

const CurrentWeather = ({ loading, currentWeather }) => {
  return (
    <>
      <div>{mockCurrent.name}</div>
      <img
        src={`https://openweathermap.org/img/wn/${mockCurrent.weather[0].icon}@2x.png`}
      />
      {/* <div>{mockCurrent}</div> */}
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
