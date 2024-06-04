import WeatherForecast from "../components/WeatherForecast";
import dummyData from "../../data/dummyWeatherDataEdited.json";

const Result = () => {
  // console.log(process.env.WEATHER_API_KEY);
  const weather = dummyData.dublin.list;
  const location = dummyData.dublin.city.name;

  return (
    <section className="wrapper d-flex flex-column justify-content-center align-items-center min-vh-atf">
      <div className="container py-10 text-white text-center position-relative z-1">
        <h1>Telling you about...</h1>
        <WeatherForecast location={location} weather={weather} />
      </div>
    </section>
  );
};
export default Result;
