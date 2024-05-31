const Bookmarks = () => {
  return (
    <>
      <h2>Favourite Locations</h2>
      <div className="row gap-y-6 pb-8">
        <div className="d-flex justify-content-left align-items-center py-3 position-relative">
          <p className="me-2 mb-0">Click</p>
          <svg className="icon h-30 w-30 me-2">
            <use xlinkHref="/assets/symbols.svg#favourite"></use>
          </svg>
          <p className="mb-0">to remove from favourites</p>
        </div>
        <p className="text-left">Click name to get info</p>
      </div>
      <ul className="row list-unstyled">
        <li className="col-sm-6 col-md-4 pb-3">
          <svg className="icon h-30 w-30 me-2">
            <a xlinkHref="#">
              <use xlinkHref="/assets/symbols.svg#favourite"></use>
            </a>
          </svg>
          Location Name
        </li>
        <li className="col-sm-6 col-md-4 pb-3">
          <svg className="icon h-30 w-30 me-2">
            <a xlinkHref="#">
              <use xlinkHref="/assets/symbols.svg#favourite"></use>
            </a>
          </svg>
          Location Name
        </li>
        <li className="col-sm-6 col-md-4 pb-3">
          <svg className="icon h-30 w-30 me-2">
            <a xlinkHref="#">
              <use xlinkHref="/assets/symbols.svg#favourite"></use>
            </a>
          </svg>
          Location Name
        </li>
      </ul>
    </>
  );
};
export default Bookmarks;
