import React from "react";
import { GoSearch } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdTrolley } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font w-full bg-[#FBEBB5]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center w-full">
        {/* Navbar Links */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-6 md:space-x-12 flex-col md:flex-row">
          <a href="#home" className="font-bold mr-5 text-black">
            Home
          </a>
          <a href="#shop" className="font-bold mr-5 text-black">
            Shop
          </a>
          <a href="#About" className="font-bold mr-5 text-black">
            About
          </a>
          <a href="#contact" className="font-bold mr-5 text-black">
            Contact
          </a>
        </nav>

        {/* Icons with increased gap and responsive layout */}
        <div className="flex flex-wrap gap-6 items-center justify-center md:flex-row flex-col">
        <IoPersonOutline size={24} color="black" />
          <GoSearch size={24} color="black" />
          
          <FaRegHeart size={24} color="black" />
          <MdTrolley size={24} color="black" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
