const Card = ({ date, temp, icon, desc, index }) => {
  let firstCard = false;
  if (index === 0) {
    firstCard = true;
  }

  return (
    <>
      <div className={`${firstCard ? "col-12 text-center" : "col-6 col-md-3"}`}>
        {firstCard && (
          <>
            <h5 className="font-bolder">Today's Weather:</h5>
            <p>{date}</p>
            <div className="d-flex gap-3 justify-content-center align-items-center">
              <img
                className="pb-2"
                src={`/assets/weather-icons/${icon}.svg`}
                alt={desc}
              />
              <div className="d-flex gap-md-3 flex-column flex-md-row">
                <p className="mb-0">{temp} &deg;C</p>
                <p className="mb-0">{desc}</p>
              </div>
            </div>
          </>
        )}
        {!firstCard && (
          <div className="card">
            <div className="card-body">
              <p className="card-subtitle">{date}</p>
              <img
                className="pb-2"
                src={`/assets/weather-icons/${icon}.svg`}
                alt={desc}
              />
              <p className="mb-2 text-body-secondary">{temp} &deg;C</p>
              <p className="card-text">{desc}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
