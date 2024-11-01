import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import HotelListing from "./HotelListing.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HotelListings = ({ listings }) => {
	const [swiperRef, setSwiperRef] = useState(null);
	let hotels = null;

	if (listings !== null && Array.isArray(listings) && listings.length > 0) {
		{
			hotels = listings.map((listing, index) => {
				const hotelName = listing.title.split(".")[1];
				return (
					<SwiperSlide key={index}>
						<HotelListing
							id={listing.id}
							title={hotelName}
							photos={listing.cardPhotos}
							priceForDisplay={listing.priceForDisplay}
							rating={listing.bubbleRating.rating}
							url={listing.commerceInfo.externalURL}
						/>
					</SwiperSlide>
				);
			});
		}
	}

	const handlePrevious = useCallback(() => {
		swiperRef?.slidePrev();
	}, [swiperRef]);

	const handleNext = useCallback(() => {
     swiperRef?.slideNext();
   }, [swiperRef]);

	return (
		<div className="my-7 text-start">
			<h3>Hotel Listings</h3>
			<div className="d-flex align-items-center bg-white rounded text-black px-4 py-3 gap-3">
				{hotels ? (
					<>
						<div>
							<button onClick={handlePrevious}>previous</button>
						</div>
						<Swiper
							modules={[Pagination, A11y]}
							spaceBetween={50}
							slidesPerView={1}
							pagination={{ clickable: true }}
							onSwiper={setSwiperRef}
						>
							{hotels}
						</Swiper>
						<div>
							<button onClick={handleNext}>Next</button>
						</div>
					</>
				) : (
					<p>No listings available.</p>
				)}
			</div>
		</div>
	);
};

export default HotelListings;
