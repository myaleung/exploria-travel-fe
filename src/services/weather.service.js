import axios from "axios";
const backendUrl = import.meta.env.VITE_APP_BACKENDURL;

export const submitWeatherSearch = async (search) => {
  try {
    // Make a post request with the new search details to send to the correct URL
    let { query, lat, lon } = search;
    if (query) {
      const response = await axios.post(`${backendUrl}/results`, {
        query: query,
      });
      // return the data response from the server
      return response.data;
    }

    if (lat && lon) {
      const response = await axios.post(`${backendUrl}/results`, {
        lat: lat,
        lon: lon,
      });
      // return the data response from the server
      return response.data;
    }
  } catch (e) {
    return e.message;
  }
};
