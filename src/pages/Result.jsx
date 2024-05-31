import WeatherForecast from "../components/WeatherForecast";

const Result = () => {
  return (
    <section className="wrapper d-flex flex-column justify-content-center align-items-center min-vh-atf">
      <div className="container py-10 text-white text-center position-relative z-1">
        <h1>Telling you about...</h1>
        <WeatherForecast />
      </div>
    </section>
  );
};
export default Result;
