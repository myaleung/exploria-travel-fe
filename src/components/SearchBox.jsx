import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { submitWeatherSearch } from "../utils/weather.service";

const SearchBox = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const submitSearchForm = async (e) => {
    e.preventDefault();
    //!if searchQuery is in database then navigate, else throw error message
    const weatherResult = await submitWeatherSearch(
      `${searchQuery.toLowerCase().trim()}`
    );

    if (weatherResult.cod)
      navigate(
        `/results?query=${searchQuery
          .toLowerCase()
          .trim()
          .replaceAll(" ", "+")}`,
        {
          state: { data: weatherResult },
        }
      );
  };

  return (
    <>
      {!props.header && (
        <div className="container py-10 text-center position-relative z-1">
          <div className="row justify-content-center">
            <div className="col col-md-8 col-lg-6">
              <h1 className="text-white pb-4">Tell me about...</h1>
              <form id="search-box" role="search" onSubmit={submitSearchForm}>
                <input
                  type="search"
                  placeholder="Enter city name..."
                  className="form-control text-center mb-4"
                  aria-label="Search City"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                  disabled={!searchQuery}
                />
              </form>
            </div>
          </div>
        </div>
      )}
      {props.header && (
        <form
          id="search-box"
          className="d-flex"
          role="search"
          onSubmit={submitSearchForm}
        >
          <input
            type="search"
            placeholder="Enter city name..."
            className="form-control me-3"
            aria-label="Search City"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-outline-primary"
            disabled={!searchQuery}
          >
            Search
          </button>
        </form>
      )}
    </>
  );
};
export default SearchBox;
