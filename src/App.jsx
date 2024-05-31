import Footer from "./components/Footer";
import Header from "./components/Header";
// import Home from "./pages/Home";
import Page from "./components/Page";
import Result from "./pages/Result";

const App = () => {
  return (
    <>
      <Header />
      <Page>
        {/* <Home /> */}
        <Result />
      </Page>
      <Footer />
    </>
  );
};

export default App;
