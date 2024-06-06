// import { useParams } from "react-router-dom";

import dummyData from "../../data/dummyWeatherDataEdited.json";
import WeatherForecast from "../components/WeatherForecast";
import PageTitle from "../components/PageTitle";

const Result = ({ bookmarks, setBookmarks }) => {
  // For use when API calls made not to dummy data
  // const { id } = useParams();
  const weather = dummyData.list;
  const location = dummyData.city.name;

  //TODO: LOADING STATE: loading state to false till all the values have loaded

  return (
    <>
      <PageTitle title="Results" />
      <section className="wrapper d-flex flex-column justify-content-center align-items-center min-vh-atf">
        <div className="container py-10 text-white text-center position-relative z-1">
          <h1>Telling you about...</h1>
          <WeatherForecast
            location={location}
            weather={weather}
            bookmarks={bookmarks}
            setBookmarks={setBookmarks}
          />
        </div>
      </section>
    </>
  );
};
export default Result;
