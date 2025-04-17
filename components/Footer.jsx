import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-xl  bg-rose-800 leading-10">
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 space-x-5 xl:h-[45vh] xl:pt-3 mx-auto w-[80%] text-white ">
        <div className="text-center md:border-b-2 md:border-slate-500 border-b-2 border-slate-500">
          <p className="text-xl font-medium"> Company</p>
          <h2>About Us</h2>
          <h2>Careers</h2>
          <h2>Blog</h2>
          <h2>Gift Cards</h2>
          <h2>Magazine</h2>
        </div>
        <div className="text-center border-b-2 border-slate-500 md:border-b-2 md:border-slate-500">
          <p className="text-xl font-medium">Support</p>
          <h2>Contact</h2>
          <h2>Legal Notice</h2>
          <h2>Privacy Policy</h2>
          <h2>Terms and Conditions</h2>
          <h2>Site Map</h2>
        </div>
        <div className="text-center md:border-b-2 md:border-slate-500 border-b-2 border-slate-500">
          <p className="text-xl font-medium">Other Services</p>
          <h2>Car hire</h2>
          <h2>Activity finder</h2>
          <h2>Tour List</h2>
          <h2>Flight Finder</h2>
          <h2>Travel Agents</h2>
        </div>
        <div className="text-center border-b-2 border-slate-500">
          <p className="text-xl font-medium">Contact Us</p>
          <h2>Our Mobile Number</h2>
          <h2>+01113738420</h2>
          <h2>Our Email address</h2>
          <h2>adelfarouk011136@gmail.com</h2>
        </div>
      </div><hr/>
      <div className="grid grid-cols-1 gap-3 xl:gap-60  xl:grid-cols-2 w-[80%] mx-auto text-white">
        <h1>coyright @ 2025 Webdev .All right reserved</h1>
          {/* <div className="w-[30%]"/> */}
        <div className="w-[10%] flex flex-row justify-between items-center space-x-6">
          <p>Social:</p>
          <div className="flex flex-row justify-between items-center space-x-4">
          <FaFacebook/>
          <FaTwitter/>
          <FaInstagram/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
