import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { photoUrl } from "../utils/photoUrl.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ images, title }) => {
	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				navigation
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				// onSlideChange={() => console.log("slide change")}
				// onSwiper={(swiper) => console.log(swiper)}
      >
        {images && images.length > 0 && images.map((image, index) => {
          const pictureUrl = photoUrl(image.sizes.urlTemplate);

					return (
						<SwiperSlide key={index}>
							<div className="ratio ratio-16x9">
								<img src={pictureUrl} alt={title} />
							</div>
						</SwiperSlide>
					);
        })}
			</Swiper>
		</>
	);
};
export default Slider;
