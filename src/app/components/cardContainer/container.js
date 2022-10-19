import CurrentWeather from "../currentWeather/current";
import Forcast from "../forcast/forcast";

const CardContainer = ({ loading, currentWeather, forcast }) => {
  return (
    <>
      <CurrentWeather loading={loading} currentWeather={currentWeather} />
      <Forcast loading={loading} forcast={forcast} />
    </>
  );
};

export default CardContainer;
