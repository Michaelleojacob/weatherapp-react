import CurrentWeather from "../currentWeather/current";
import Forecast from "../forecast/forecast";

const CardContainer = ({ loading, currentWeather, forecast, isImperial }) => {
  return (
    <>
      {loading ? (
        ""
      ) : (
        <CurrentWeather
          currentWeather={currentWeather}
          isImperial={isImperial}
        />
      )}
      {loading ? (
        "loading..."
      ) : (
        <Forecast forecast={forecast} isImperial={isImperial} />
      )}
    </>
  );
};

export default CardContainer;
