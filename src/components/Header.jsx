import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={`nav-link ${({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}`}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown text-nowrap">
                <NavLink
                  to="/saved-locations/"
                  role="button"
                  aria-expanded="false"
                  className={`nav-link dd-toggle ${({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}`}
                >
                  My Saved Locations
                </NavLink>
                <a
                  role="button"
                  className="dropdown-toggle dropdown-toggle-split ps-lg-0"
                  data-toggle="dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle Dropdown</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className={`dropdown-item ${({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""}`}
                      to="/results/dublin"
                    >
                      Dublin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`dropdown-item ${({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""}`}
                      to="/results/leeds"
                    >
                      Leeds
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={`nav-link ${({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}`}
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <SearchBar />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
