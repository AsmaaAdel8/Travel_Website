import React from "react";
import { FaStar } from "react-icons/fa";
import { Reviowpersons } from "../models/data";

function Customers() {
  const StarRating = ({ rate }) => {
    const totalStars = 5; // Total number of stars
    const validRate = Math.max(0, Math.min(totalStars, Number(rate) || 0)); // Ensure rate is between 0 and totalStars

    return (
      <div className="flex flex-row space-x-3 items-center p-2">
        {[...Array(totalStars)].map((_, index) => {
          return (
            <div key={index}>
              {index < validRate ? (
                <FaStar color="gold" /> // Filled star
              ) : (
                <FaStar color="lightgray" /> // Empty star
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className=" bg-blue-950 h-[70vh] ">
      <div className="relative p-6 flex flex-row w-[90%] m-auto items-center">
        <div className="mr-24 text-white pt-4 mt-4 text-[20px]">
          <h1 className="font-bold">What our customers are saying us ?</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br /> Maxime ullam mollitia quas vitae ea dolorem qui corporis non
            unde vel.
          </p>
          <p className="font-bold">4.88</p>
          <p>Overall rating</p>
          <div className="flex flex-row space-x-1">
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
          </div>
        </div>
        <div className="mt-[-8%] ">
          {Reviowpersons.map((person) => {
            return (
              <div
                key={person.id}
                className="absolute bg-white w-[35vw] p-4 rounded-xl"
              >
                <p className="font-bold">{person.commen}</p>
                <StarRating rate={person.rate} />
                <div className="flex flex-row space-x-3 items-center">
                  <img
                    src={person.img}
                    draggable="false"
                    className="w-[5vw] h-[15vh] rounded-[50%]"
                  />
                  <div>
                    <h2 className="font-bold">{person.name}</h2>
                    <p>{person.jop}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Customers;
