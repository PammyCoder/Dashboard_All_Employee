import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Employee_Status = () => {
  // const [selected, setSelected]=useState();
  return (
    <>
      <div className="w-full h-[639px] pl-[85%] ">
        <div className="w-[250px] h-1  pl-2  -mx-[600px] justify-between text-center  ">
          <h1 className=" font-bold text-2xl underline text-purple-800">
            Employment Status
          </h1>
        </div>
        <div className="w-13 h-7 flex bg-purple-600 pr-2 shadow-lg shadow-purple-500/50 bg-grey-500">
          <span className="flex mr-4">
            <input
              type="text"
              placeholder="search"
              className=" text-black w-[200px] h-7 border-2 border-white"
            />
            <FaSearch className=" text-right w-5 h-3 mt-2 ml-2" />
          </span>
        </div>
        <div className="border-2 border-purple   m-4 p-4  bg-white  h-[550px] w-[1150px] absolute  left-[300px] ">
          {/* Create user.. */}
          <button className="w-[200px] h-8  rounded-full  bg-white  shadow-lg shadow-purple-500 hover:bg-purple-500 justify-items-end absolute left-[930px] mt-2">
            Add Employement Status
          </button>

          <table className="border border-purple-500 mt-[48px] p-5   shadow-lg shadow-purple-500 w-[1000px] ">
            <tr className="  w-3 shadow-lg border shadow-purple-500  bg-white text-balance  ">
              <th className="text-xl  w-[50px] h-6 ">Name</th>
              <th className="text-xl">Preview</th>
              <th className="text-xl">Edit</th>
            </tr>

            <tr className=" h-3 w-[30px]  bg-white text-balance ">
              <td className="p-3 w-[100px] h-6 "></td>
              <td className="p-3  h-6"></td>

              <td className="p-3 w-[100px]   h-6"></td>
            </tr>
          </table>

  
        </div>
      </div>
    </>
  );
};

export default Employee_Status;
