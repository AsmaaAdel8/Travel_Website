"use client"
import { recondedPlacesSlides } from "../../models/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        className="p-4"
      >
        {recondedPlacesSlides.map((place) => {
          return (
            <div
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
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default DestinationSlider;
