import React, { useEffect, useState } from "react";
import { getWeather } from "./actions/weather";

const App = () => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        handleWeather(latitude, longitude)
    );
  }, []);

  const handleWeather = async (latitude, longitude) => {
    const data = await getWeather(latitude, longitude);
    console.log(data);
    setWeather(data);
  };

  return (
    <div>
      <header>Olá Mundo!</header>
    </div>
  );
};

export default App;
