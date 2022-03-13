import React from "react";
import { Typography } from "@material-ui/core";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";
import { getWeatherIcon } from "../../utils";

import { ContainerGrid, IconGrid, LocaleGrid, WeatherDataGrid } from "./style";

export const WeatherView = ({
  temp,
  cityName,
  country,
  feels_like,
  temp_max,
  temp_min,
  description,
  main: icon,
}) => {
  const weatherIcon = getWeatherIcon(icon);

  return (
    <ContainerGrid container>
      <LocaleGrid item xs={12}>
        <Typography>
          {cityName}, {country}
        </Typography>
      </LocaleGrid>
      <WeatherDataGrid item xs={9}>
        <Typography variant="h2">
          {Math.round(temp)}ºC <br />
        </Typography>
        <Typography variant="h3">
          {Math.round(feels_like)}ºC Feels like <br />
        </Typography>
        <Typography variant="h3">
          {description} <br />
        </Typography>
        <Typography variant="h4">
          Max {Math.round(temp_max)}ºC • Min {Math.round(temp_min)}ºC <br />
        </Typography>
      </WeatherDataGrid>
      <IconGrid item xs={3}>
        <ReactAnimatedWeather {...weatherIcon} size="80" animate={true} />
      </IconGrid>
    </ContainerGrid>
  );
};
