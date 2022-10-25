import CurrentWeather from "../currentWeather/current";
import Forcast from "../forcast/forcast";

const CardContainer = ({ loading, currentWeather, forcast, isImperial }) => {
  return (
    <>
      <CurrentWeather
        loading={loading}
        currentWeather={currentWeather}
        isImperial={isImperial}
      />
      <Forcast loading={loading} forcast={forcast} />
    </>
  );
};

export default CardContainer;
