import axios from "axios";
const weatherUrl = import.meta.env.VITE_APP_WEATHERURL;

export const submitWeatherSearch = async (searchTerm) => {
  try {
    // Make a get request with the new search details to send to the correct URL
    const response = await axios.get(weatherUrl, searchTerm);
    // return the data response from the server
    return response.data;
  } catch (e) {
    return e;
  }
};
