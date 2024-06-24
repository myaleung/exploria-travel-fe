import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "./Card";
import toCelcius from "../utils/toCelcius";
import {
	updateSavedLocation,
	updateLocalStorage,
} from "../utils/savedLocations.js";

const WeatherForecast = ({ weather, location, setBookmarks }) => {
	let options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	let newWeatherAt12 = weather.filter((item) =>
		item.dt_txt.includes("12:00:00")
	);

	let cards = newWeatherAt12.map((item, index) => {
		let date = new Date(item.dt_txt).toLocaleDateString("en-UK", options);
		let temp = toCelcius(item.main.temp);
		let icon = item.weather[0].icon;
		let desc = item.weather[0].description;

		return (
			<Card
				key={item.dt}
				date={date}
				temp={temp}
				icon={icon}
				desc={desc}
				index={index}
			/>
		);
	});

	const navigate = useNavigate();
  const [favourite, setFavourite] = useState(false);

	const handleFavourite = () => {
		let user = JSON.parse(localStorage.getItem("user"));
		if (!user) {
			navigate("/login");
			return;
		}
		setFavourite(!favourite);
		//save/remove location in user bookmarks
		updateSavedLocation(location.name, location.coord.lat, location.coord.lon);
    updateLocalStorage(
			user,
			location.name,
			location.coord.lat,
			location.coord.lon
		);
    return;
	};  

	useEffect(() => {
		let user = JSON.parse(localStorage.getItem("user"));
		if (user) {
      setBookmarks(user.savedLocations);
      if (
				user.savedLocations.some(
					(loc) =>
						loc.city === location.name &&
						loc.longitude === `${parseFloat(location.coord.lon).toFixed(2)}` &&
						loc.latitude === `${parseFloat(location.coord.lat).toFixed(2)}`
				)
			) {
				setFavourite(true);
      }
		}
	}, [favourite]);

	return (
		<>
			<h2>{location.name}</h2>
			<div className="d-flex justify-content-center py-3 position-relative">
				<p className="mb-0">
					<button
						type="button"
						className={`btn border-0 ${
							favourite ? "text-primary" : "text-white"
						}`}
						onClick={handleFavourite}
					>
						<svg
							className={`icon h-30 w-30 me-2 ${
								favourite ? "text-primary" : "text-white opacity-50"
							}`}
						>
							<use xlinkHref="/assets/symbols.svg#favourite"></use>
						</svg>
						{favourite ? "Added" : "Add"} to My Favourites
					</button>
				</p>
			</div>
			<div className="row row-gap-4">{cards}</div>
		</>
	);
};
export default WeatherForecast;
