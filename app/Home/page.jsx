"use client";
import NavBar from "../../components/header/NavBar";
import Mobileheader from "../../components/header/Mobileheader";
import { useState } from "react";
import SearchBox from "./SearchBox";
import { motion } from "framer-motion";

export default function HomePage() {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);
  return (
    <div >
      <div className="relative w-full">
        {/* background video */}
        <video
          src="/images/hero.mp4"
          loop
          autoPlay
          muted
          className="
        w-full h-[100vh] object-cover object-center absolute"
        />
        {/* naves mobile and window */}
        <div className="absolute top-0 left-0 w-full h-screen bg-blue-950 bg-opacity-20 ">
          <NavBar openNav={handleNavShow} />
          <Mobileheader closeNav={handleCloseNav} showNav={showNav} />
        </div>
      {/* overlay content in hero bage */}
      <motion.div
        className="absolute w-full h-full top-[50vh] flex items-center justify-center bg-gray-900"
        initial={{ opacity: 0, scale: 0.8, y: "-50%" }}
        animate={{ opacity: 1, scale: 1, y: "0%" }}
        transition={{
          duration: 1, // Animation duration in seconds
          ease: "easeInOut", // Smooth easing
        }}
      >
        <div className="flex items-center justify-center flex-col w-full h-full relative">
          <div className="mb-10">
            <h1 className="text-[25px] mb-5 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] sm:tracking-[0.3rem] text-white text-bold uppercase">
              Lets Enjoy The Nature
            </h1>
            <p className="text-white text-center mb-1">
              Get The Pest Prices on 2,000,000+ Properties , WorldWide
            </p>
          </div>
          <SearchBox />
        </div>
      </motion.div>
      </div>
    </div>
  );
}
