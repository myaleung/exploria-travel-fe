import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { submitHotelSearch } from "../services/hotel.service";
import { submitWeatherSearch } from "../services/weather.service";
import PageTitle from "../components/PageTitle";
import HotelListings from "../components/HotelListings";
import WeatherForecast from "../components/WeatherForecast";

const Result = ({ setBookmarks }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [data, setData] = useState(null);
	const [hotelData, setHotelData] = useState(null);
	// const [isLoading, setIsLoading] = useState(false);
	const { state } = useLocation();
	const result = state;
	let lon = searchParams.get("lon");
	let lat = searchParams.get("lat");

	const fetchWeatherData = async () => {
		// setIsLoading(true); // Start loading
		try {
			const weatherResultData = result?.data
				? result.data
				: await submitWeatherSearch({ lat, lon });
			setData(weatherResultData);
		} catch (error) {
			console.error("Failed to fetch weather data:", error);
			return error.message;
		} finally {
			// setIsLoading(false); // End loading
		}
	};

	const fetchHotelData = async () => {
		// setIsLoading(true); // Start loading
		try {
			const hotelResultData = await submitHotelSearch({ lat, lon });
			const hotelData10 = hotelResultData?.slice(0, 10);
			setHotelData(hotelData10);
		} catch (error) {
			console.error("Failed to fetch hotel data:", error);
			return error.message;
		} finally {
			// setIsLoading(false); // End loading
		}
	};

	useEffect(() => {
		fetchWeatherData();
		fetchHotelData();
	}, [searchParams, result]);

	//TODO: LOADING STATE: loading state to false till all the values have loaded

	return (
		<>
			<PageTitle title="Results" />
			<section className="wrapper d-flex flex-column justify-content-center align-items-center min-vh-atf">
				<div className="container py-10 text-white text-center position-relative z-1">
					<h1>Telling you about...</h1>
					{data !== null && (
						<WeatherForecast
							location={data.city}
							weather={data.list}
							setBookmarks={setBookmarks}
						/>
					)}
					<HotelListings listings={hotelData} />
				</div>
			</section>
		</>
	);
};
export default Result;
