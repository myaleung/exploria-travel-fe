const SearchBox = () => {
  return (
    <div className="container py-10 text-center position-relative z-1">
      <div className="row justify-content-center">
        <div className="col col-md-8 col-lg-6">
          <h1 className="text-white pb-4">Tell me about...</h1>
          <form id="search-box">
            <input
              type="text"
              placeholder="Location name..."
              className="form-control text-center mb-4"
            />
            <button className="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
