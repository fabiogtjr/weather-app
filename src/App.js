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
          alert("Esse site precisa de permissões de localização!");
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
          "Carregando..."
        ) : (
          <>
            {weather ? (
              <>
                Olá, está {Math.round(weather?.temp)}º em {weather?.cityName} -{" "}
                {weather?.country}, sensação termica de{" "}
                {Math.round(weather?.feels_like)}º, com previsão de maxima
                entorno de {Math.round(weather?.temp_max)}º e minima{" "}
                {Math.round(weather?.temp_min)}º, com previsão de{" "}
                {weather?.description}
              </>
            ) : (
              "Erro ao carregar localização, tente novamente!"
            )}
          </>
        )}
      </header>
    </div>
  );
};

export default App;
