import PageTitle from "../components/PageTitle";

const NotFound = () => {
  return (
    <>
      <PageTitle title="Page not found" />
      <section className="d-flex flex-column mt-20 min-vh-atf">
        <div className="row">
          <div className="col d-flex flex-column justify-content-evenly align-items-center gap-4 text-secondary text-center z-1">
            <p className="h4">Looks like you got lost...</p>
            <h1>Page Not Found!</h1>
            <svg className="w-100 h-450">
              <use xlinkHref="/assets/symbols.svg#not-found"></use>
            </svg>
            <a className="btn btn-primary" href="/" role="button">
              Return to home
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default NotFound;
