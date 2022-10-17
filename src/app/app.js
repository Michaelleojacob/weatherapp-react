import { useEffect, useState } from "react";
import SearchBar from "./components/searchbar/searchbar";

const App = () => {
  const [location, setLocation] = useState("london");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const apikey = process.env.REACT_APP_API_KEY;
  // const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;
  const geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apikey}`;
  const fiveDayForcast = async (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      });
  };

  const getFiveDayForcast = async () => {
    setLoading(true);
    await fetch(geocodingUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const { lat, lon } = data[0];
        fiveDayForcast(lat, lon);
      });
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    getFiveDayForcast();
    setLocation(null);
  };

  useEffect(() => {
    getFiveDayForcast();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <SearchBar
        location={location}
        handleLocation={handleLocation}
        handleSubmitLocation={handleSubmitLocation}
      />
      {/* <ToggleSwitch /> */}
    </>
  );
};

export default App;
