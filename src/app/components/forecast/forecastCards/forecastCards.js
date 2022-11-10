import LowHiAvg from "../../../utils/getLowHighAvg";
import convertTemp from "../../../utils/convertTemp";
import getIcon from "../../../utils/getIcon";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ForecastCard = ({ dt_txt, list, isImperial }) => {
  const mid = Math.floor(list.length / 2);
  const numericDay = new Date(list[mid].dt_txt).getDay();
  const dayOfWeek = weekday[numericDay];
  const { low, high, icon, condition } = LowHiAvg(list);

  const lowTemp = convertTemp(low);
  const highTemp = convertTemp(high);
  // const avgTemp = convertTemp(avg);

  return (
    <div className="forecast-card">
      <div>{dayOfWeek}</div>
      {/* <img
        className="forecast-card-icon"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      /> */}
      <img
        className="forecast-card-icon"
        src={`${process.env.PUBLIC_URL}${getIcon(condition)}`}
      ></img>
      <div className="forecast-card-temp-container">
        <div className="forecast-card-temp low">
          {isImperial ? lowTemp[0] : lowTemp[1]}
          <span className="deg">&deg;</span>
        </div>
        {/* <div className='forecast-card-temp'>
          {isImperial ? avgTemp[0] : avgTemp[1]}<span className='deg'>&deg;</span>
        </div> */}
        <div className="forecast-card-temp high">
          {isImperial ? highTemp[0] : highTemp[1]}
          <span className="deg">&deg;</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
