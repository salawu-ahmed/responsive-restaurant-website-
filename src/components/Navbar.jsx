import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="max-w-[1640px] flex justify-between items-center mx-auto p-4">
      <div className="flex items-center">
        <div>
          <AiOutlineMenu size={20} className="cursor-pointer" />
        </div>
        <h1 className="text-xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 text-[14px] rounded-full">
          <p className="bg-black rounded-full p-2 text-white">Delivery</p>
          <p className="p-2">Pick up</p>
        </div>
      </div>

      {/* search bar */}
      <div className="bg-gray-200 px-2 rounded-full flex items-center w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25}/>
        <input type="text" placeholder="Search Foods" className="bg-transparent p-2 focus:outline-none w-full"/>
      </div>

      {/* add to cart button  */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={25} className="mr-2"/> Cart
      </button>
    </div>

  );
};

export default Navbar;
