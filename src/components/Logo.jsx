const Logo = () => {
  return (
    <>
      <svg className="logo me-5">
        <a xlinkHref="/">
          <use xlinkHref="/assets/symbols.svg#exploria-logo"></use>
        </a>
      </svg>
      <svg className="logo-m">
        <a xlinkHref="/">
          <use xlinkHref="/assets/symbols.svg#exploria-logo"></use>
        </a>
      </svg>
    </>
  );
};

export default Logo;
