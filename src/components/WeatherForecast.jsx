import Card from "./Card";
import toCelcius from "../utils/toCelcius";

const WeatherForecast = ({ weather, location }) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let cards = weather.slice(0, 5).map((item, index) => {
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

  return (
    <>
      <h2>{location}</h2>
      <div></div>
      <div className="d-flex justify-content-center py-3 position-relative">
        <svg className="icon h-30 w-30 me-2">
          <use xlinkHref="/assets/symbols.svg#favourite"></use>
        </svg>
        <p className="mb-0">
          <a href="#">Add to My Favourites</a>
        </p>
      </div>
      <div className="row row-gap-4">{cards}</div>
    </>
  );
};
export default WeatherForecast;
