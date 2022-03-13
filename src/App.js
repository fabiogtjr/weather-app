import React, { useEffect, useState } from "react";

import { CircularProgress, Container } from "@material-ui/core";
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
    <Container>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          {weather ? (
            <WeatherView {...weather} />
          ) : (
            "Error loading locale, try again later!"
          )}
        </>
      )}
    </Container>
  );
};

export default App;
