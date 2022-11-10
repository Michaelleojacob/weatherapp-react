import CurrentWeather from "../currentWeather/current";
import Forecast from "../forecast/forecast";

const CardContainer = ({ loading, currentWeather, forecast, isImperial }) => {
  return (
    <div className="card-container">
      {currentWeather === null && forecast === null ? (
        "loading..."
      ) : (
        <CurrentWeather
          currentWeather={currentWeather}
          isImperial={isImperial}
        />
      )}
      {currentWeather === null && forecast === null ? (
        ""
      ) : (
        <Forecast forecast={forecast} isImperial={isImperial} />
      )}
    </div>
  );
};

export default CardContainer;
