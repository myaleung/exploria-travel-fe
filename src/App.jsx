import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Page from "./components/Page";
import Result from "./pages/Result";
import SavedLocations from "./pages/SavedLocations";

const App = () => {
  return (
    <>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Result />} />
          <Route path="/saved-locations/" element={<SavedLocations />} />
          <Route path="/results/:id" element={<Result />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Page>
      <Footer />
    </>
  );
};

export default App;
