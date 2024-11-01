import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HotelCarousel = ({ hotels, title }) => {
	return (
		<>
			<Swiper
				modules={[Navigation, A11y]}
				navigation
				spaceBetween={50}
				slidesPerView={1}
				// onSlideChange={() => console.log("slide change")}
				// onSwiper={(swiper) => console.log(swiper)}
			>
				{hotels &&
					hotels.length > 0 &&
					hotels.map((hotel, index) => {

						return (
							<SwiperSlide key={index}>
								<h3 className="text-primary">{title}</h3>
								<ImageSlider title={title} images={photos} />
								{price !== null && (
									<p className="text-primary fs-4">From: {price}</p>
								)}
								<p>
									<a href={url} target="_blank" rel="noopener noreferrer">
										Link
									</a>
								</p>
							</SwiperSlide>
						);
					})}
			</Swiper>
		</>
	);
};
export default HotelCarousel;
