import CurrentWeather from "../currentWeather/current";
import Forcast from "../forcast/forcast";

const CardContainer = ({ loading, currentWeather, forcast, isImperial }) => {
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
      {loading ? "loading..." : <Forcast forcast={forcast} />}
    </>
  );
};

export default CardContainer;
