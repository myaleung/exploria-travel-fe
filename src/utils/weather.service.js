import axios from "axios";

const getWeatherData = async () => {
  const weatherUrl = import.meta.env.VITE_APP_WEATHERURL;

  try {
    const weatherDataResponse = await axios.get({ weatherUrl });
    console.log(weatherDataResponse);
    console.log(weatherDataResponse.data);
  } catch (e) {
    console.log(e.message);
  }
};

getWeatherData();
