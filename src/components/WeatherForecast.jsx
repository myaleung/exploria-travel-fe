import { useState } from "react";

import Card from "./Card";
import toCelcius from "../utils/toCelcius";

const WeatherForecast = ({ weather, location }) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let newWeatherAt12 = weather.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  let cards = newWeatherAt12.map((item, index) => {
    let date = new Date(item.dt_txt).toLocaleDateString("en-UK", options);
    let temp = toCelcius(item.main.temp);
    let icon = item.weather[0].icon;
    let desc = item.weather[0].description;

    return (
      <Card
        key={item.dt}
        date={date}
        temp={temp}
        icon={icon}
        desc={desc}
        index={index}
      />
    );
  });

  const [favourite, setFavourite] = useState(false);

  console.log(favourite);

  return (
    <>
      <h2>{location}</h2>
      <div></div>
      <div className="d-flex justify-content-center py-3 position-relative">
        <svg className="icon h-30 w-30 me-2">
          <use xlinkHref="/assets/symbols.svg#favourite"></use>
        </svg>
        <p className="mb-0">
          <a href="#" onClick={(e) => setFavourite((favourite) => !favourite)}>
            Add to My Favourites
          </a>
        </p>
      </div>
      <div className="row row-gap-4">{cards}</div>
    </>
  );
};
export default WeatherForecast;
