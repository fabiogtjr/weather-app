import Clear from "../static/img/clear.jpg";
import Clouds from "../static/img/clouds.jpg";
import Thunderstorm from "../static/img/thunderstorm.jpg";
import Rain from "../static/img/rain.jpg";
import Drizzle from "../static/img/drizzle.jpg";
import Snow from "../static/img/snow.jpg";
import Fog from "../static/img/fog.jpg";

export const isDayTime = () => {
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;
  return isDayTime;
};

export const getWeatherIcon = (icon) => {
  switch (icon) {
    case "Clear":
      return {
        icon: isDayTime() ? "CLEAR_DAY" : "CLEAR_NIGHT",
        color: "goldenrod",
      };
    case "Clouds":
      return {
        icon: isDayTime() ? "PARTLY_CLOUDY_DAY" : "PARTLY_CLOUDY_NIGHT",
        color: "lightgrey",
      };
    case "Thunderstorm":
      return {
        icon: "RAIN",
        color: "lightgrey",
      };
    case "Rain":
      return {
        icon: "RAIN",
        color: "lightgrey",
      };
    case "Drizzle":
      return {
        icon: "SLEET",
        color: "lightgrey",
      };
    case "Snow":
      return {
        icon: "SNOW",
        color: "white",
      };
    default:
      return {
        icon: "FOG",
        color: "lightgrey",
      };
  }
};

export const getWeatherBackground = (icon) => {
  switch (icon) {
    case "Clear":
      return Clear;
    case "Clouds":
      return Clouds;
    case "Thunderstorm":
      return Thunderstorm;
    case "Rain":
      return Rain;
    case "Drizzle":
      return Drizzle;
    case "Snow":
      return Snow;
    default:
      return Fog;
  }
};
