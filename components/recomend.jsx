import { HotelData } from "../models/data";
import { FaHeart } from "react-icons/fa";
import Headinghelper from "./Headinghelper";

function Recomend() {
  const hotel = HotelData.slice(0, 4);

  return (
    <div className="mt-[3%]">
      {/* headert Section */}
      <Headinghelper header={"Recommended Hotels"} />
      {/* hotel Section */}
      <div className="w-[80%] m-auto h-auto xl:h-[70vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
        {hotel.map((hot, index) => {
          return (
            <div key={index} className="relative h-full">
              {/* overlay */}
              <div className="absolute h-[50%] space-x-3 backdrop-blur-xl mb-3">
                <FaHeart className="absolute text-red-700 rounded-xl w-6 h-6 top-3 right-3" />
                <img
                  loading="lazy"
                  alt={hot.name}
                  draggable="false"
                  src={hot.img}
                  className="overflow-hidden w-80 h-56 xl:h-[55vh] xl:w-full rounded-xl transition-all object-cover duration-500 group-hover:scale-110"
                />
              </div>
              <div className="xl:mt-[135%] mt-[60%] mx-auto md:mt-56 ">
                <h3 className="font-bold text-xl">{hot.name}</h3>
                <p>{hot.location}</p>
                <div>
                  <span className="w-7 h-7 text-center font-bold bg-blue-950 text-white">
                    {hot.rating}
                  </span>
                  <span>
                    Exiptional {Math.floor(Math.random() * 2000)} Reviewers
                  </span>
                </div>
              </div>
              <p>
                Starting from <span className="font-medium">{hot.price}</span>{" "}
                USA
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recomend;
