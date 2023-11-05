import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'; 


const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  };
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path
      ? "text-red-500 border-b-2 border-red-500 w-fit"
      : "";

  }

  return (
    <>
      <nav className="w-full sm:flex hidden bg-blue-200 text-black pt-[40px] pl-[30px] " >
        <h1 className="w-[30%] flex justify-start  ml-[20px] font-bold text-3xl text-red-700 pb-10 " > LBG</h1>
        <div className="w-[70%] flex gap-[50px]">
          <Link to="/" className={`font-semibold text-md text-blue-700 hover:text-red-700  hover:border-b-2 hover:border-red-500 ${isActive('/')}`}> HOME</Link>
          <Link to="/about" className={`font-semibold text-md text-blue-700 hover:text-red-700  hover:border-b-2 hover:border-red-500 ${isActive('/about')}`}> ABOUT</Link>
          <Link to="/service" className={`font-semibold text-md text-blue-700 hover:text-red-700  hover:border-b-2 hover:border-red-500  ${isActive('/service')}`}> SERVICE</Link>
          <Link to="/contact" className={`font-semibold text-md text-blue-700 hover:text-red-700  hover:border-b-2 hover:border-red-500  ${isActive('/contact')}`}> CONTACT</Link>
        </div>
      </nav>
      <div className="sm:hidden flex bg-blue-300 h-[60px] w-full justify-between">
        <h1 className="m-4">LBG</h1>
        <button className="m-4 my-5" onClick={toggleMenu}>

        {isMobileMenuOpen ?
          <FaTimes />:<FaBars />
          
        }
        </button>

      </div >
      {isMobileMenuOpen && (
          <div className="flex flex-col bg-blue-300 py-10 px-8  h-screen absolute top-0 w-[30%] gap-6 " >
           <Link to="/"> <h1 className="mt-10">LBG</h1> </Link> 
           <hr />
              <div className=" flex justify-between gap-0 ml-1" >
              <AiFillHome icon="/"  className="ml-3 mt-1" />
              <Link to="/" className="mr-6 "> Home </Link>
              </div>
              <hr />
              <Link to="/About"> about </Link>
              <hr />
              <Link to="/Contact"> Home </Link>
              <hr />
              <Link to="/Services"> Home </Link>
              

          </div>
        )
        }
    </>

  )
};

export default Header;
