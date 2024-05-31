import Footer from "./components/Footer";
import Header from "./components/Header";
// import Home from "./pages/Home";
import Page from "./components/Page";
import Result from "./pages/Result";
import SavedLocations from "./pages/SavedLocations";

const App = () => {
  return (
    <>
      <Header />
      <Page>
        {/* <Home /> */}
        {/* <Result /> */}
        <SavedLocations />
      </Page>
      <Footer />
    </>
  );
};

export default App;
