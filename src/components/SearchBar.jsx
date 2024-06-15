import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { submitWeatherSearch } from "../utils/weather.service";

const SearchBar = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  // const navigate = useNavigate();

  // const submitSearchForm = async (e) => {
  //   e.preventDefault();
  //   //!if searchQuery is in database then navigate, else throw error message
  //   const weatherResult = await submitWeatherSearch(
  //     `${searchQuery.toLowerCase().trim()}`
  //   );

  //   if (weatherResult.cod)
  //     navigate(
  //       `/results?query=${searchQuery
  //         .toLowerCase()
  //         .trim()
  //         .replaceAll(" ", "+")}`,
  //       {
  //         state: { result: weatherResult },
  //       }
  //     );
  // };

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
