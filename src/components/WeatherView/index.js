import React from "react";
import { Grid } from "@material-ui/core";

export const WeatherView = ({
  temp,
  cityName,
  country,
  feels_like,
  temp_max,
  temp_min,
  description,
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {cityName}, {country}
      </Grid>
      <Grid item xs={10}>
        {Math.round(temp)}ºC <br />
        {Math.round(feels_like)}ºC Feels like <br />
        {description} <br />
        Max {Math.round(temp_max)}ºC - Min {Math.round(temp_min)}ºC <br />
      </Grid>
      <Grid item xs={2}>
        Icone
      </Grid>
    </Grid>
  );
};
