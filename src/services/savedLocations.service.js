import axios from "axios";
const backendUrl = import.meta.env.VITE_APP_BACKENDURL;

export const getSavedLocations = async (token) => {
  try {
    const response = await axios.get(`${backendUrl}/saved-locations`, token);
    return response.data;
  } catch (e) {}
};

export const addToSavedLocations = async (userDetails, city, lat, lon) => {
  try {
    const response = await axios.post(
      `${backendUrl}/saved-locations`,
      userDetails,
      city,
      lat,
      lon
    );
    return response.data;
  } catch (e) {}
};
