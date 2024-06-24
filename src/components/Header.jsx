import { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { logout } from "../utils/auth.js";

const Header = ({ isLoggedIn, bookmarks, setBookmarks }) => {
	const location = useLocation();
	const userString = localStorage.getItem("user");
	let user;
	if (userString) {
		user = JSON.parse(userString);
	}

	const handleLogout = () => {
		logout();
		window.location.href = "/";
	};

	useEffect(() => {
		if (userString) {
			setBookmarks(user.savedLocations);
		}
	}, []);

	return (
		<header className="header">
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<Logo />
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navigation"
						aria-controls="navigation"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navigation">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
							<li className="nav-item">
								<NavLink
									to="/"
									className={`nav-link ${({ isActive, isPending }) =>
										isPending ? "pending" : isActive ? "active" : ""}`}
								>
									Home
								</NavLink>
							</li>
							{isLoggedIn && (
								<li className="nav-item dropdown text-nowrap">
									<NavLink
										to="/saved-locations/"
										role="button"
										aria-expanded="false"
										className={`nav-link dd-toggle ${({
											isActive,
											isPending,
										}) => (isPending ? "pending" : isActive ? "active" : "")}`}
									>
										My Saved Locations
									</NavLink>
									{bookmarks.length > 0 && (
										<>
											<a
												role="button"
												className="dropdown-toggle dropdown-toggle-split ps-lg-0"
												data-toggle="dropdown"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												<span className="sr-only">Toggle Dropdown</span>
											</a>
											<ul className="dropdown-menu">
												{bookmarks.sort().map((bookmark, i) => {
													const capitalisedBookmark =
														bookmark.city.charAt(0).toUpperCase() +
														bookmark.city.slice(1);

													return (
														<li key={i}>
															<Link
																to={`/results/?lon=${bookmark.longitude}&lat=${bookmark.latitude}`}
																className={`dropdown-item`}
															>
																{capitalisedBookmark}
															</Link>
														</li>
													);
												})}
											</ul>
										</>
									)}
								</li>
							)}
							{isLoggedIn && (
								<li className="nav-item">
									<NavLink
										to={`/edit/${user.id}`}
										className={`nav-link`}
									>
										Change Password
									</NavLink>
								</li>
							)}
							<li className="nav-item">
								{isLoggedIn && (
									<button
										className={`nav-link`}
										onClick={handleLogout}
									>
										Logout
									</button>
								)}
								{!isLoggedIn && (
									<NavLink
										to="/login"
										className={`nav-link`}
									>
										Login
									</NavLink>
								)}
							</li>
						</ul>
						{location.pathname !== "/" && <SearchBox header={true} />}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
