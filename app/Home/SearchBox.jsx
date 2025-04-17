"use client";
import React, { useEffect, useState } from "react";
import { FaCalendarWeek } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import getData from "../../api/GetDat";

function SearchBox() {
   const [data, setData] = useState({
    location: "",
    InDate: "",
    OutDate: "",
    rooms: "",
    guests: "",
  });
  return (
    <div className="relative w-[95%] sm:w-[80%]">
      <div className="bg-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full items-center justify-center gap-8 p-8 rounded-lg">
        <div className="flex items-center space-x-3">
          <FaMap className="w-11 h-8 text-blue-800" />
          <div>
            <p className="bold">Location</p>
            <input
              type="text"
              placeholder="Where are you going?"
              className="rounded-lg focus:outline-none"
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  location: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaCalendarWeek className="w-11 h-8 text-blue-900" />
          <div>
            <p className="bold">Start Date</p>
            <input
              type="date"
              className="rounded-lg focus:outline-none"
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  InDate: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaCalendarWeek className="w-11 h-8 text-blue-900" />
          <div>
            <p className="bold">End Date</p>
            <input
              type="date"
              className="rounded-lg focus:outline-none"
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  OutDate: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <IoPeopleSharp className="w-11 h-8 text-blue-900" />
          <div>
            <p className="bold">Guest</p>
            <input
              type="number"
              placeholder="1 guest"
              className="rounded-lg focus:outline-none"
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  guests: e.target.value,
                }))
              }
            />
            <input
              type="number"
              placeholder="1 room"
              className="rounded-lg focus:outline-none"
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  rooms: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
      <button className="absolute bg-red-700 cursor-pointer lg:top-[17vh] text-white text-center w-[15vw] h-[7vh] left-[43%] sm:top-[35vh] md:top-[15vh] rounded hover:bg-red-500"
        onClick={getData(data)}>
        Search
      </button>
    </div>
  );
}

export default SearchBox;
