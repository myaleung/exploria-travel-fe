import Bookmarks from "../components/Bookmarks";

const SavedLocations = () => {
  return (
    <section className="wrapper d-flex flex-column justify-content-center align-items-center min-vh-atf">
      <div className="container py-10 text-white text-center position-relative z-1">
        <h1>Telling you about...</h1>
        <Bookmarks />
      </div>
    </section>
  );
};
export default SavedLocations;
