export const getWeatherIcon = (icon) => {
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;

  switch (icon) {
    case "Clear":
      return {
        icon: isDayTime ? "CLEAR_DAY" : "CLEAR_NIGHT",
        color: "goldenrod",
      };
    case "Clouds":
      return {
        icon: isDayTime ? "PARTLY_CLOUDY_DAY" : "PARTLY_CLOUDY_NIGHT",
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
