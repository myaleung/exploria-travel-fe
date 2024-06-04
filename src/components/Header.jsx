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
                <a href="/" className="nav-link active" aria-current="true">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="/saved-locations/"
                  role="button"
                  aria-expanded="false"
                  className="nav-link dd-toggle"
                >
                  My Saved Locations
                </a>
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
                    <a className="dropdown-item" href="/saved-locations/dublin">
                      Dublin
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="/results" className="nav-link">
                  Results
                </a>
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
