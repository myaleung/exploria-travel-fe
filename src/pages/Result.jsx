import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
// import dummyData from "../../data/dummyWeatherDataEdited.json";
import WeatherForecast from "../components/WeatherForecast";
import PageTitle from "../components/PageTitle";
import { submitWeatherSearch } from "../utils/weather.service";

const Result = ({ bookmarks, setBookmarks }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const { state } = useLocation();
  const result = state;
  if (result !== null) {
    setData(result.data);
  }

  useEffect(() => {
    const weatherData = async () => {
      if (data === null) {
        let query = searchParams.get("query");
        query = query.replaceAll("+", " ");
        const weatherResultData = await submitWeatherSearch(query);
        setData(weatherResultData);
      }
    };

    weatherData();
  }, [data]);

  //TODO: LOADING STATE: loading state to false till all the values have loaded

  return (
    <>
      <PageTitle title="Results" />
      <section className="wrapper d-flex flex-column justify-content-center align-items-center min-vh-atf">
        <div className="container py-10 text-white text-center position-relative z-1">
          <h1>Telling you about...</h1>
          {data !== null && (
            <WeatherForecast
              location={data.city.name}
              weather={data.list}
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
            />
          )}
        </div>
      </section>
    </>
  );
};
export default Result;
