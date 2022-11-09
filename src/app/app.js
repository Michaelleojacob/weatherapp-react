import { useEffect, useState } from "react";
import chunkforecast from "./utils/chunkforecast";
import SearchBar from "./components/searchbar/searchbar";
import CardContainer from "./components/cardContainer/container";
import CelFahSwitch from "./components/switch/celFahSwitch";

const App = () => {
  const [isImperial, setIsImperial] = useState(true);
  const [location, setLocation] = useState("london");
  const [loading, setLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
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
      // const {lat, lon} = userLocation === null ? await getLatLon() : userLocation
      const { lat, lon } = await getLatLon();
      const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
      const fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`;

      const res = await Promise.allSettled([
        getData(currentUrl),
        getData(fiveDayUrl),
      ]);
      setCurrentWeather(res[0].value);
      const chunkByDay = chunkforecast(res[1].value.list);
      setforecast(chunkByDay);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      throw new Error(err);
    }
  };

  const handleLocation = (e) => setLocation(e.target.value);

  const navGeolocationSuccess = (position) => {
    setUserLocation(position);
  };
  const navGeoloationFail = (err) => console.warn(err);
  const navGeolocationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const getUserLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      navGeolocationSuccess,
      navGeoloationFail,
      navGeolocationOptions
    );
  };

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    getWeather();
    setLocation("");
  };

  useEffect(() => {
    getUserLocation();
    getWeather();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(userLocation);
  }, [userLocation]);
  // useEffect(() => {
  //   console.log(loading);
  // }, [loading]);
  // useEffect(() => {
  // console.log(currentWeather);
  // }, [currentWeather]);
  // useEffect(() => {
  // console.log(forecast);
  // }, [forecast]);

  return (
    <>
      <SearchBar
        location={location}
        handleLocation={handleLocation}
        handleSubmitLocation={handleSubmitLocation}
        loading={loading}
      />
      <CelFahSwitch toggleImperial={toggleImperial} />
      <CardContainer
        loading={loading}
        currentWeather={currentWeather}
        forecast={forecast}
        isImperial={isImperial}
      />
    </>
  );
};

export default App;
