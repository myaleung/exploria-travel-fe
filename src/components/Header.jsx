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
              <li className="nav-item dropdown">
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
                  className="dropdown-toggle dropdown-toggle-split"
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
                      to="/results/:id"
                    >
                      Use Params
                    </NavLink>
                  </li>
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
                      to="#"
                    >
                      Something else here
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
              <li className="nav-item">
                <NavLink
                  to="/results/"
                  className={`nav-link ${({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}`}
                >
                  Results
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
