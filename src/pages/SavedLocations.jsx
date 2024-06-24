import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Bookmarks from "../components/Bookmarks";
import PageTitle from "../components/PageTitle";

const SavedLocations = ({ bookmarks, setBookmarks }) => {
  const navigate = useNavigate();
  const userString = localStorage.getItem("user");
  if (!userString) {
		navigate("/login");
	}
  const user = JSON.parse(userString);

  useEffect(() => {
		setBookmarks(user.savedLocations);
	}, []);

  return (
    <>
      <PageTitle title="Favourite Locations" />
      <section className="wrapper d-flex flex-column justify-content-center align-items-center min-vh-atf">
        <div className="container py-10 text-white text-center position-relative z-1">
          <h1>Telling you about...</h1>
          <Bookmarks
            bookmarks={bookmarks}
            setBookmarks={setBookmarks}
          />
        </div>
      </section>
    </>
  );
};
export default SavedLocations;
