const WeatherForecast = () => {
  const date = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const today = date.toLocaleDateString("en-UK", options);

  return (
    <>
      <h2>Location</h2>
      <div className="d-flex justify-content-center py-3 position-relative">
        <svg className="icon h-30 w-30 me-2">
          <use xlinkHref="/assets/symbols.svg#favourite"></use>
        </svg>
        <p className="mb-0">
          <a href="#">Add to My Favourites</a>
        </p>
      </div>
      <div className="row row-gap-4 pb-3 justify-content-center">
        <div className="col-12 w-50 text-center">
          <h5 className="font-bolder">Today's Weather:</h5>
          <p>{today}</p>
          <div className="d-flex gap-3 justify-content-center align-items-center">
            <img
              className="pb-2"
              src="/assets/weather-icons/01d.svg"
              alt="Sunny"
            />
            <div className="d-flex gap-md-3 flex-column flex-md-row">
              <p>12 &deg;C</p>
              <p>Weather Description</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
      <div className="row row-gap-4">
        <div className="col-6 col-md-3">
          <div className="card">
            <div className="card-body">
              <p className="card-subtitle">Next Day Name</p>
              <img
                className="pb-2"
                src="/assets/weather-icons/01d.svg"
                alt="Sunny"
              />
              <p className="mb-2 text-body-secondary">8 &deg;C</p>
              <p className="card-text">Weather Description</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card">
            <div className="card-body">
              <p className="card-subtitle">Next Day Name</p>
              <img
                className="pb-2"
                src="/assets/weather-icons/01d.svg"
                alt="Sunny"
              />
              <p className="mb-2 text-body-secondary">8 &deg;C</p>
              <p className="card-text">Weather Description</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card">
            <div className="card-body">
              <p className="card-subtitle">Next Day Name</p>
              <img
                className="pb-2"
                src="/assets/weather-icons/01d.svg"
                alt="Sunny"
              />
              <p className="mb-2 text-body-secondary">8 &deg;C</p>
              <p className="card-text">Weather Description</p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card">
            <div className="card-body">
              <p className="card-subtitle">Next Day Name</p>
              <img
                className="pb-2"
                src="/assets/weather-icons/01d.svg"
                alt="Sunny"
              />
              <p className="mb-2 text-body-secondary">8 &deg;C</p>
              <p className="card-text">Weather Description</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WeatherForecast;
