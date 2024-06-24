import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Page from "./components/Page";
import Result from "./pages/Result";
import SavedLocations from "./pages/SavedLocations";
import { loggedIn } from "./utils/auth";
import PasswordUpdateForm from "./pages/PasswordUpdateForm";

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    const token = Cookies.get("token");
		setIsLoggedIn(loggedIn(token));
	}, [isLoggedIn]);

  return (
		<>
			<Header
				isLoggedIn={isLoggedIn}
				bookmarks={bookmarks}
				setBookmarks={setBookmarks}
			/>
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
					<Route path="/results" element={<Result setBookmarks={setBookmarks} />} />
					<Route path="/login" element={<Login />} />
					<Route path="/sign-up" element={<Login />} />
					<Route path="/edit/:id" element={<PasswordUpdateForm />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Page>
			<Footer />
		</>
	);
};

export default App;
