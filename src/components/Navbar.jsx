import React from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends } from 'react-icons/fa'

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

      {/* mobile menu */}
      <div className="bg-black/80 top-0 absolute h-screen w-full z-10 left-0"></div>

      {/* side drawer menu */}
      <div className="absolute w-[300px] top-0 left-0 h-screen bg-white duration-300 z-10">
        <AiOutlineClose size={30} className="absolute right-4 top-4 cursor-pointer"/>
        <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
        <nav>
            <ul className="flex flex-col p-4 text-gray-800">
                <li className="flex items-center text-xl py-4"><TbTruckDelivery size={25} className="mr-4"/> Order</li>
                <li className="flex items-center text-xl py-4"><MdFavorite size={25} className="mr-4"/> Favorites</li>
                <li className="flex items-center text-xl py-4"><FaWallet size={25} className="mr-4"/> Wallet</li>
                <li className="flex items-center text-xl py-4"><MdHelp size={25} className="mr-4"/> Help</li>
                <li className="flex items-center text-xl py-4"><AiFillTag size={25} className="mr-4"/> Promotions</li>
                <li className="flex items-center text-xl py-4"><BsFillSaveFill size={25} className="mr-4"/> Best Ones</li>
                <li className="flex items-center text-xl py-4"><FaUserFriends size={25} className="mr-4"/> Invite Friends</li>
            </ul>
        </nav>
      </div>
    </div>

  );
};

export default Navbar;
