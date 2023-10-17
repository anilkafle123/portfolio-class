import React from "react";
import { Link, useLocation } from "react-router-dom";



const Header = () => {
  const location= useLocation();
const isActive = (path)=> {
return location.pathname === path 
? "text-red-500 border-b-2 border-red-500 w-fit"
:"";

}
  
  return  <nav className="w-full flex bg-blue-200 text-black pt-[40px] pl-[30px] " >
    <h1 className=" w-[30%] flex justify-start ml-[20px] font-bold text-3xl text-red-700 pb-10 " > LOGO</h1>
    <div className="w-[70%] flex gap-[50px]">
      <Link to="/" className={`font-semibold text-md text-blue-700 hover:text-red-700  hover:border-b-2 hover:border-red-500 ${isActive('/')}`}> HOME</Link>
      <Link to="/about" className={`font-semibold text-md text-blue-700 hover:text-red-700  hover:border-b-2 hover:border-red-500 ${isActive('/about')}`}> ABOUT</Link>
      <Link to="/service" className={`font-semibold text-md text-blue-700 hover:text-red-700  hover:border-b-2 hover:border-red-500  ${isActive('/service')}`}> SERVICE</Link>
      <Link to="/contact" className={`font-semibold text-md text-blue-700 hover:text-red-700  hover:border-b-2 hover:border-red-500  ${isActive('/contact')}`}> CONTACT</Link>
    </div>
  </nav>
};

export default Header;
