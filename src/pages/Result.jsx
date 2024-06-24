import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
// import dummyData from "../../data/dummyWeatherDataEdited.json";
import WeatherForecast from "../components/WeatherForecast";
import PageTitle from "../components/PageTitle";
import { submitWeatherSearch } from "../services/weather.service";

const Result = ({ setBookmarks }) => {
	const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
	const { state } = useLocation();
	const result = state;

	useEffect(() => {
		const fetchWeatherData = async () => {
			// setIsLoading(true); // Start loading
			let lon = searchParams.get("lon");
			let lat = searchParams.get("lat");

			try {
				const weatherResultData = result?.data
					? result.data
					: await submitWeatherSearch({ lat, lon });
        setData(weatherResultData);
			} catch (error) {
        console.error("Failed to fetch weather data:", error);
        return error.message
			} finally {
				// setIsLoading(false); // End loading
			}
		};
		fetchWeatherData();
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
				</div>
			</section>
		</>
	);
};
export default Result;
