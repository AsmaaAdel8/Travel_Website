"use client"
import { recondedPlacesSlides } from "../../models/data";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function DestinationSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
       <Swiper
        className="w-[90%] mb-6 "
          modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay
          navigation
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
        {recondedPlacesSlides.map((place) => {
          return (
            <SwiperSlide
              className="sm:w-[50vw] lg:w-[40vw] mx-3"
              key={place.id}
            >
              <img
                src={place.img}
                alt="overview places to viste"
                loading="lazy"
                draggable="false"
                className="h-[50vh] rounded-lg"
              />
              <h4 className="text-left p-3 font-medium">{place.title}</h4>
              <p>{place.p}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default DestinationSlider;
