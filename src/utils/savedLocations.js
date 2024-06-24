import Cookies from "js-cookie";
import { getSavedLocations, handleSavedLocations } from "../services/savedLocations.service.js";

const savedLocations = async (token) => {
  return await getSavedLocations(token);
}

export const updateSavedLocation = async (city, lat, lon) => {
  const cookie = Cookies.get("token");
  return await handleSavedLocations({
    cookie: cookie,
    city: city,
    lat: parseFloat(lat).toFixed(2),
    lon: parseFloat(lon).toFixed(2)
  });
};

export const updateLocalStorage = (user, city, lat, lon) => {
  const locationExists = user.savedLocations.some(
    (loc) =>
      loc.city === city &&
      loc.longitude === `${parseFloat(lon).toFixed(2)}` &&
      loc.latitude === `${parseFloat(lat).toFixed(2)}`
  );
  if (!locationExists) {
    user.savedLocations.push({
      city: city,
      longitude: `${parseFloat(lon).toFixed(2)}`,
      latitude: `${parseFloat(lat).toFixed(2)}`,
    });
  } else {
    user.savedLocations = user.savedLocations.filter(
      (loc) =>
        loc.city !== city &&
        loc.longitude !== `${parseFloat(lon).toFixed(2)}` &&
        loc.latitude !== `${parseFloat(lat).toFixed(2)}`
    );
  }
  localStorage.setItem("user", JSON.stringify(user));
};

export default savedLocations;