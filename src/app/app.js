import { useEffect, useState } from "react";
import SearchBar from "./components/searchbar/searchbar";

const App = () => {
  const [location, setLocation] = useState("london");
  // const [loading, setLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcast, setForcast] = useState(null);
  const apikey = process.env.REACT_APP_API_KEY;

  const geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apikey}`;

  const currentForcast = async (lat, lon) => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
    )
      .then((res) => res.json())
      .then((data) => setCurrentWeather(data));
  };

  const fiveDayForcast = async (lat, lon) => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setForcast(data);
      });
  };

  const currentAndFiveDayForcast = async () => {
    await fetch(geocodingUrl)
      .then((res) => res.json())
      .then((data) => {
        const { lat, lon } = data[0];
        currentForcast(lat, lon);
        fiveDayForcast(lat, lon);
      });
  };

  const handleLocation = (e) => setLocation(e.target.value);

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    currentAndFiveDayForcast();
    setLocation("");
  };

  useEffect(() => {
    currentAndFiveDayForcast();
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
      />
    </>
  );
};

export default App;
