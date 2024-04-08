import React from "react";
import { FaBars,  FaUser } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <nav className="bg-purple-800 px-4 py-1 flex justify-between">
      <div className="flex items-center text-xl  ">
{ sidebarToggle ?
  <IoArrowForwardCircleOutline 
          className="text-white me-4 font-bold w-12 h-10 cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        :
<IoArrowBackCircleOutline 
          className="text-white me-4 font-bold w-12 h-10 cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
}

        <span className="text-white font-semibold"></span>
      </div>
      <div className="flex items-center gap-x-5">
        
        <div className="relative ">
          <button className="text-white group">
            <FaUser className="w-12 h-10 mt-1" />
            Admin
            <div className="z-10 hidden absolute rounded-lg shadow w-32 group-focus:block right-0 top-0 h-[70px] mr-14 bg-purple-500">
              <ul className="py-2 text-sm text-white">
                <li>
                  <a href="">Profile</a>
                </li>
                <li>
                  <a href="">Setting</a>
                </li>
                <li>
                  <a href="">Log Out</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
