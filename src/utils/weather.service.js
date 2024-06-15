import axios from "axios";
const backendUrl = import.meta.env.VITE_APP_BACKENDURL;

export const submitWeatherSearch = async (searchTerm) => {
  try {
    // Make a get request with the new search details to send to the correct URL
    const response = await axios.post(`${backendUrl}/results`, {
      query: searchTerm,
    });
    // return the data response from the server
    return response.data;
  } catch (e) {
    return e.message;
  }
};
