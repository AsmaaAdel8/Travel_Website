"use client";
import { Head } from "../../models/Header.js";
import Link from "next/link";
import { MdTravelExplore } from "react-icons/md";
import { HiBars3BottomRight } from "react-icons/hi2";
// import "../styles/globals.css";
import Mobileheader from "./Mobileheader.jsx";

export default function NavBar({ openNav }) {
  return (
    <nav className="w-full bg-black bg-opacity-45 fixed z-[1000]">
      <div className="w-[90%] px-10 flex flex-row items-center transition-all duration-200 h-[10vh] justify-between">
        <div className="flex space-x-2 items-center p-2">
          <MdTravelExplore className="w-55 h-55 text-red-200 bg-rose-700 rounded-xl text-2xl" />
          <span className="text-white uppercase">tripi</span>
        </div>
        <div className="hidden lg:flex items-center space-x-10">
          {Head.map((link) => {
            return (
              <Link key={link.id} href={link.link}>
                <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-400 after:origin-right">
                  {link.title}
                </p>
              </Link>
            );
          })}
          <button className="w-44 h-8 text-white bg-stone-800 cursor-pointer text-base hover:bg-blue-950 transform transition-all duration-200 rounded-lg">
            Book Now!
          </button>
        </div>
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-white lg:hidden"
        />
      </div>
    </nav>
  );
}
