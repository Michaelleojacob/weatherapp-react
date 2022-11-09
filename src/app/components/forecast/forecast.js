import ForecastCard from "./forecastCards/forecastCards";

const Forecast = ({ forecast, isImperial }) => {
  return (
    <div className="forecast-container">
      {forecast instanceof Map
        ? [...forecast.entries()].map(([dt_txt, list]) =>
            list.length > 5 ? (
              <ForecastCard
                dt_txt={dt_txt}
                list={list}
                key={list[0].dt}
                isImperial={isImperial}
              />
            ) : (
              ""
            )
          )
        : ""}
    </div>
  );
};

export default Forecast;
