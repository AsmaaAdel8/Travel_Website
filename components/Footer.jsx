import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-xl  bg-emerald-500 leading-10">
      <div className="flex flex-row items-center space-x-5 justify-between h-[50vh] mx-auto w-[80%] text-white ">
        <div className="text-center">
          <p className="text-xl font-medium"> Company</p>
          <h2>About Us</h2>
          <h2>Careers</h2>
          <h2>Blog</h2>
          <h2>Gift Cards</h2>
          <h2>Magazine</h2>
        </div>
        <div className="text-center">
          <p className="text-xl font-medium">Support</p>
          <h2>Contact</h2>
          <h2>Legal Notice</h2>
          <h2>Privacy Policy</h2>
          <h2>Terms and Conditions</h2>
          <h2>Site Map</h2>
        </div>
        <div className="text-center">
          <p className="text-xl font-medium">Other Services</p>
          <h2>Car hire</h2>
          <h2>Activity finder</h2>
          <h2>Tour List</h2>
          <h2>Flight Finder</h2>
          <h2>Travel Agents</h2>
        </div>
        <div className="text-center">
          <p className="text-xl font-medium">Contact Us</p>
          <h2>Our Mobile Number</h2>
          <h2>+01113738420</h2>
          <h2>Our Email address</h2>
          <h2>adelfarouk011136@gmail.com</h2>
        </div>
      </div><hr/>
      <div className="flex flex-row items-center justify-between w-[80%] mx-auto text-white">
        <h1>coyright @ 2025 Webdev .All right reserved</h1>
        <div className="w-[10%] flex flex-row items-center space-x-2 justify-between">
          <p>Social:</p>
          <div className="flex flex-row items-center justify-between space-x-2">
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
