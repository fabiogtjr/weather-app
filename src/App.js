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
      <header>
        Olá, está {Math.round(weather?.temp)}º em {weather?.cityName} -{" "}
        {weather?.country}, sensação termica de{" "}
        {Math.round(weather?.feels_like)}º, com previsão de maxima entorno de{" "}
        {Math.round(weather?.temp_max)}º e minima{" "}
        {Math.round(weather?.temp_min)}º, com previsão de {weather?.description}
      </header>
    </div>
  );
};

export default App;
