import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const getCookie = (name) => {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime === true) {
      logout();
    }
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return error.message;
  }
};

export const loggedIn = (token) => {
  if (!token) {
    return false;
  }
  return isTokenExpired(token) ? false : true;
};

export const logout = () => {
  Cookies.remove('token')
  localStorage.removeItem("user");
};