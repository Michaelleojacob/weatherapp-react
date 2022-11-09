import CurrentWeather from "../currentWeather/current";
import Forecast from "../forecast/forecast";

const CardContainer = ({ loading, currentWeather, forecast, isImperial }) => {
  return (
    <>
      {currentWeather === null && forecast === null ? (
        "loading..."
      ) : (
        <CurrentWeather
          currentWeather={currentWeather}
          isImperial={isImperial}
        />
      )}
      {currentWeather === null && forecast === null ? (
        "loading..."
      ) : (
        <Forecast forecast={forecast} isImperial={isImperial} />
      )}
    </>
  );
};

export default CardContainer;
