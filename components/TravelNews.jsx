import React from "react";
import Headinghelper from "./Headinghelper";

function TravelNews() {
  const News = [
    {
      id: 1,
      src: "/images/7.jpg",
      place: "Zealand",
      date: "18,Novamber 2024",
    },
    {
      id: 2,
      src: "/images/13.jpg",
      place: "Australia",
      date: "12,Novamber 2024",
    },
    {
      id: 3,
      src: "/images/12.jpg",
      place: "Pakistan",
      date: "26,Novamber 2024",
    },
    {
      id: 4,
      src: "/images/3.jpg",
      place: "Bangladesh",
      date: "19,Novamber 2024",
    },
  ];
  return (
    <div className="m-auto mt-10 w-[90%] h-[40vh] mb-72">
      <Headinghelper header={"Exciting Travels News For You"}/>
      <div className="flex flex-row space-x-3 items-center mt-4">
        {News.map((place) => {
          return <div key={place.id} className="w-[32%] h-[35vh]">
            <img loading="lazy" draggable="false" src={place.src} className="h-[50vh] w-full rounded-lg"/>
            <h1 className="font-bold">Top 10 Places To Visit in {place.place}</h1>
            <p>{place.date}</p>
          </div>;
        })}
      </div>
    </div>
  );
}

export default TravelNews;
