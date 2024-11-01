import ImageSlider from "./ImageSlider.jsx";
import "swiper/css";
import "swiper/css/navigation";

const HotelListing = ({ title, photos, price, url }) => {
	return (
		<>
				<h3 className="text-primary">{title}</h3>
				<ImageSlider title={title} images={photos} />
				{price !== null && <p className="text-primary fs-4">From: {price}</p>}
				<p>
					<a href={url} target="_blank" rel="noopener noreferrer">
						Link
					</a>
				</p>
		</>
	);
};
export default HotelListing;
