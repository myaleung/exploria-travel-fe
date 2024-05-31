const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container py-6 text-center">
        <div className="row">
          <div className="col text-white">
            <svg className="w-25 w-md-50">
              <use xlinkHref="/assets/symbols.svg#stamp"></use>
            </svg>
            <p className="pt-3 small text-white">
              &copy; {new Date().getFullYear()} DFCorp trading as Exploria. All
              Rights Reserved. Registered in England and Wales.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
