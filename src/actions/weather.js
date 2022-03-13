import axios from "axios";

export const getWeather = async (lat, long) => {
  if (!lat || !long) return;
  try {
    const { data, status } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=en&appid=096919e1d26c1b30ba3b4d14693aed3f`
    );
    if (status === 200) {
      return {
        ...data?.main,
        ...data?.weather[0],
        ...data?.wind,
        cityName: data?.name,
        country: data?.sys?.country,
      };
    }
  } catch (error) {
    console.log(error);
    return;
  }
};
