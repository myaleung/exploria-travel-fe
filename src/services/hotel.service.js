import axios from "axios";
import hotelListingData from "../../data/dummyHotelData.json";
const backendUrl = import.meta.env.VITE_APP_BACKENDURL;

export const submitHotelSearch = async ({ lat, lon }) => {
  try {
    const dateToday = new Date();

    const checkInYear = dateToday.getFullYear();
    const checkInMonth = dateToday.getMonth() + 1;
    const checkInDay = dateToday.getDate() + 1;

    const checkOutYear = dateToday.getFullYear();
    const checkOutMonth = dateToday.getMonth() + 1;
    const checkOutDay = dateToday.getDate() + 6;

    let checkInDate = `${checkInYear}-${checkInMonth}-${checkInDay}`;
    let checkOutDate = `${checkOutYear}-${checkOutMonth}-${checkOutDay}`;

    //API results exceeded, using dummy data
    // const response = await axios.post(`${backendUrl}/hotels`, {
    //   latitude: lat,
    //   longitude: lon,
    //   checkIn: checkInDate,
    //   checkOut: checkOutDate,
    // });

    const response = hotelListingData;
    
    // return the data response from the server
    return response.data.data;
  } catch (e) {
    return e.message;
  }
};