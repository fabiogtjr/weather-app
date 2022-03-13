import React, { useEffect, useState } from "react";

import { Container } from "@material-ui/core";
import { getWeather } from "./actions/weather";

import { WeatherView } from "./components/WeatherView";

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
      {loading ? (
        "Loading..."
      ) : (
        <>
          {weather ? (
            <>
              <Container>
                <WeatherView {...weather} />
              </Container>
            </>
          ) : (
            "Error loading locale, try again later!"
          )}
        </>
      )}
    </div>
  );
};

export default App;
