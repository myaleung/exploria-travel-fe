import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Page from "./components/Page";

const App = () => {
  return (
    <>
      <Header />
      <Page>
        <Home />
      </Page>
      <Footer />
    </>
  );
};

export default App;
