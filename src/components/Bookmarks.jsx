import { Link } from "react-router-dom";

import {
	updateSavedLocation,
	updateLocalStorage,
} from "../utils/savedLocations.js";

const Bookmarks = ({ bookmarks, setBookmarks }) => {
  let user = JSON.parse(localStorage.getItem("user"));

  const removeFavourite = (city, longitude, latitude) => {
    updateSavedLocation(city, latitude, longitude);
    updateLocalStorage(user, city, latitude, longitude);
    setBookmarks(user.savedLocations);
  };

  return (
    <>
      <h2>Favourite Locations</h2>
      <div className="row gap-y-6 pb-8">
        <div className="d-flex justify-content-left align-items-center py-3 position-relative">
          <p className="me-2 mb-0">Click</p>
          <svg className="icon h-30 w-30 me-2 text-primary">
            <use xlinkHref="/assets/symbols.svg#favourite"></use>
          </svg>
          <p className="mb-0">to remove from favourites</p>
        </div>
        <p className="text-start">Click name to get info</p>
      </div>
      {bookmarks.length === 0 && (
        <p className="fs-5">No favourite locations to display.</p>
      )}
      {bookmarks.length > 0 && (
        <ul className="row list-unstyled">
          {bookmarks.sort().map((bookmark, i) => {
            const capitalisedBookmark =
              bookmark.city.charAt(0).toUpperCase() + bookmark.city.slice(1);

            return (
              <li key={i} className="col-sm-6 col-md-4 pb-3 text-start">
                <button
                  className="btn border-0 text-primary"
                  onClick={() => removeFavourite(bookmark.city, bookmark.longitude, bookmark.latitude)}
                >
                  <svg className="icon h-30 w-30 me-2">
                    <use xlinkHref="/assets/symbols.svg#favourite"></use>
                  </svg>
                </button>
                <Link to={`/results/?lon=${bookmark.longitude}&lat=${bookmark.latitude}`}>
                  {capitalisedBookmark}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Bookmarks;
