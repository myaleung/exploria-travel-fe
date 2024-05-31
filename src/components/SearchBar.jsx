const SearchBar = () => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-3"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};
export default SearchBar;
