import { useEffect, useState } from "react";
import SearchBar from "./components/searchbar/searchbar";
import CardContainer from "./components/cardContainer/container";

const App = () => {
  const [isImperial, setIsImperial] = useState(true);
  const [location, setLocation] = useState("london");
  const [loading, setLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcast, setForcast] = useState(null);
  const apikey = process.env.REACT_APP_API_KEY;

  const toggleImperial = () => setIsImperial(!isImperial);

  const geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apikey}`;

  const getLatLon = async () => {
    try {
      const rawData = await fetch(geocodingUrl);
      const data = await rawData.json();
      const { lat, lon } = data[0];
      return { lat, lon };
    } catch (err) {
      console.error("getLatLon failed");
      throw new Error(err);
    }
  };

  const getData = async (url) => {
    try {
      const rawData = await fetch(url);
      const data = await rawData.json();
      return data;
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  };

  const getWeather = async () => {
    try {
      setLoading(true);
      const { lat, lon } = await getLatLon();
      const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
      const fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`;

      const res = await Promise.allSettled([
        getData(currentUrl),
        getData(fiveDayUrl),
      ]);
      setCurrentWeather(res[0].value);
      setForcast(res[1].value);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      throw new Error(err);
    }
  };

  const handleLocation = (e) => setLocation(e.target.value);

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    getWeather();
    setLocation("");
  };

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    console.log(currentWeather);
  }, [currentWeather]);
  useEffect(() => {
    console.log(forcast);
  }, [forcast]);

  return (
    <>
      <SearchBar
        location={location}
        handleLocation={handleLocation}
        handleSubmitLocation={handleSubmitLocation}
        loading={loading}
      />
      <CardContainer
        loading={loading}
        currentWeather={currentWeather}
        forcast={forcast}
        isImperial={isImperial}
      />
    </>
  );
};

export default App;
