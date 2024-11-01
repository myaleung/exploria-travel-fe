import { useEffect, useRef, useState } from "react";
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const Map = ({ long, lat }) => {
	const mapElement = useRef();

    const mapZoom = 10;
    const [map, setMap] = useState({});

    useEffect(() => {
        let map = tt.map({
					key: "YWMhf9GkHfeQyM8hWvo8i6KWpvoLHTlA",
					container: mapElement.current,
					center: [long, lat],
					zoom: mapZoom,
				});
        setMap(map);
        return () => map.remove();
    }, []);

    return (
			<div className="my-md-7 text-start">
				<h3>Map</h3>
				<div
					ref={mapElement}
					className="mapDiv"
					style={{
						height: "480px",
					}} /* This height value can be set to whatever you need} */
				/>
			</div>
		);
};
export default Map;
