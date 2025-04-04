import React from "react";
import { Head } from "../../models/Header";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

function Mobileheader({closeNav,showNav}) {
  const openNav=showNav?"translate-x-0":"translate-x-[-100%]"
  return (
    <div>
      <div className={`fixed ${openNav} inset-0 transform transition-all duration-500 z[1002] bg-black bg-opacity-70 w-full h-[100%]`}></div>
      <div className={`text-white fixted ${openNav} justify-center flex flex-col  h-[100vh] transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1005]`}>
        {Head.map((link) => {
          return (
            <Link href={link.link} key={link.id}>
              <p className="w-fit text-white text-[20px] ml-12 border-b-[1.2px] pb-1 border-white sm:text-[30px]">
                {link.title}
              </p>
            </Link>
          );
        })}
        <CgClose className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" onClick={closeNav}/>
      </div>
    </div>
  );
}

export default Mobileheader;
