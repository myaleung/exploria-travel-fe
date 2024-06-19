import { useEffect } from "react";

import Bookmarks from "../components/Bookmarks";
import PageTitle from "../components/PageTitle";
import { getSavedLocations } from "../services/savedLocations.service.js";

const SavedLocations = (props) => {
  useEffect(() => {
    const cookie = document.cookie.split("=")[1];
    const token = { token: cookie };
    console.log(token);
    const userBookmarks = async () => {
      await getSavedLocations(token);
    };
    // console.log(userBookmarks());
  }, []);

  return (
    <>
      <PageTitle title="Favourite Locations" />
      <section className="wrapper d-flex flex-column justify-content-center align-items-center min-vh-atf">
        <div className="container py-10 text-white text-center position-relative z-1">
          <h1>Telling you about...</h1>
          <Bookmarks
            bookmarks={props.bookmarks}
            setBookmarks={props.setBookmarks}
          />
        </div>
      </section>
    </>
  );
};
export default SavedLocations;
