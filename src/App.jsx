import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Page from "./components/Page";
import Result from "./pages/Result";
import SavedLocations from "./pages/SavedLocations";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  return (
    <>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/saved-locations"
            element={
              <SavedLocations
                bookmarks={bookmarks}
                setBookmarks={setBookmarks}
              />
            }
          />
          <Route
            path="/results"
            element={
              <Result bookmarks={bookmarks} setBookmarks={setBookmarks} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Page>
      <Footer />
    </>
  );
};

export default App;
