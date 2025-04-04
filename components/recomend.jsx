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
      <div className="w-[90%] m-auto h-[70vh] flex flex-row space-x-3 items-center justify-between">
        {hotel.map((hot, index) => {
          return (
            <div key={index} className="relative w-[30%] h-full ">
              <img
                loading="lazy"
                alt={hot.name}
                draggable="false"
                src={hot.img}
                className="overflow-hidden w-full h-[80%] rounded-xl transition-all object-cover duration-500 group-hover:scale-110"
              />
              <FaHeart className="absolute text-red-700 rounded-xl w-6 h-6 bg-slate-50 top-3 right-3" />
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
