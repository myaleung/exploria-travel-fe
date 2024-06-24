import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <svg className="logo me-5">
          <use xlinkHref="/assets/symbols.svg#exploria-logo"></use>
        </svg>
      </Link>
      <Link to="/">
        <svg className="logo-m">
          <use xlinkHref="/assets/symbols.svg#exploria-logo-mobile"></use>
        </svg>
      </Link>
    </>
  );
};

export default Logo;
