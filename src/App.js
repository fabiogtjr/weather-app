import React, { useEffect, useState } from "react";
import { getWeather } from "./actions/weather";

const App = () => {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        handleWeather(latitude, longitude),
      ({ code }) => {
        if (code === 1) {
          setLoading(false);
          alert("This website needs geolocation permissions!");
        }
      }
    );
  }, []);

  const handleWeather = async (latitude, longitude) => {
    setLoading(true);
    const data = await getWeather(latitude, longitude);
    if (data) setWeather(data);
    setLoading(false);
  };

  return (
    <div>
      <header>
        {loading ? (
          "Loading..."
        ) : (
          <>
            {weather ? (
              <>
                Hello, the weather today is {Math.round(weather?.temp)}ºC in{" "}
                {weather?.cityName} - {weather?.country},{" "}
                {Math.round(weather?.feels_like)}ºC feels like, max temp, and{" "}
                {Math.round(weather?.temp_max)}ºC min temp{" "}
                {Math.round(weather?.temp_min)}ºC, {weather?.description}
              </>
            ) : (
              "Error loading locale, try again later!"
            )}
          </>
        )}
      </header>
    </div>
  );
};

export default App;
