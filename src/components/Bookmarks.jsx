import { useEffect } from "react";
import { Link } from "react-router-dom";

const Bookmarks = ({ bookmarks, setBookmarks }) => {
  // const location = ["leeds", "bristol"];
  // const addLocation = () => {
  //   setBookmarks([...bookmarks, ...location]);
  // };
  const removeFavourite = (e) => {
    // setBookmarks(bookmarks.filter((bookmark) => bookmark !== location));
  };

  // useEffect(() => {
  //   addLocation();
  // }, []);

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
              bookmark.charAt(0).toUpperCase() + bookmark.slice(1);

            return (
              <li key={i} className="col-sm-6 col-md-4 pb-3 text-start">
                <button
                  className="btn border-0 text-primary"
                  onClick={removeFavourite(bookmark)}
                >
                  <svg className="icon h-30 w-30 me-2">
                    <use xlinkHref="/assets/symbols.svg#favourite"></use>
                  </svg>
                </button>
                <Link to={`/results/${bookmark}`}>{capitalisedBookmark}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Bookmarks;
