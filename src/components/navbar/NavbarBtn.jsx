import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-baseWhite border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-red hover:border-red hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
        Hire Me
        <div className="sm:hidden md:block">
        <FiArrowDownRight/>
        </div>
    </button>
  );
};

export default NavbarBtn;