import axios from "axios";
const backendUrl = import.meta.env.VITE_APP_BACKENDURL;

export const getSavedLocations = async (token) => {
  try {
    const response = await axios.get(`${backendUrl}/saved-locations`, {
      headers: {
        "Authorization": `Bearer ${token.cookie}`
      }
    });
    return response.data;
  } catch (e) {
    return e.message;
  }
};

export const handleSavedLocations = async (details) => {
  try {
    const response = await axios.put(`${backendUrl}/save-location`, {
      city: details.city,
      lat: details.lat,
      lon: details.lon
    }, {
      headers: {
        "Authorization": `Bearer ${details.cookie}`
      }
    });
    return response.data;
  } catch (e) {
    return e.message;
  }
};
