import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Daily_Log = () => {
  const [items, setItems] = useState([]);
  
  const [toggle, setToggle] =useState(false)

  const handleAdd = (v) => {
    setItems([...items, ""]);
  };
  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="md:w-full sm:w-[500px]   md:h-screen  md:pl-[85%]   ">
        <div className="w-[250px] h-1  pl-2  -mx-[600px] justify-between text-center  ">
          <h1 className=" font-bold sm:font-semibold md:text-2xl  sm:text-l md:underline sm:underline md:text-purple-800 sm:text-purple-700 ">
            Daily Log
          </h1>
        </div>
        <div className="md:w-13 md:h-7 md:flex md:bg-purple-600 md:pr-2 md:shadow-lg md:shadow-purple-500/50 md:bg-grey-500">
          <span className="flex mr-4">
            <input
              type="text"
              placeholder="search"
              className=" text-black w-[200px] h-7 border-2 border-white"
            />
            <FaSearch className=" text-right md:w-3 sm:w-1 h-3 mt-2 ml-2" />
          </span>
        </div>

        <div className=" mt-1  mx-[200px] w-[250px]  ">
          <span className="flex mr-2 pr-35  h-8">
            <button
              className="mr-2 pr-30 bg-purple-500 w-[190px] relative right-[290px] rounded-full shadow-lg shadow-purple-500 hover:bg-white "
              onClick={handleAdd}
            >
              Add Attendance
            </button>
          </span>
        </div>
        <div className=" mx-[400px] md:w-[100px]  sm:w-[50px] -mt-8 ">
          <span className="flex mr-2 pr-35  h-8">
            <button className="mr-2 pr-30 bg-purple-500 w-[100px] relative right-[290px] rounded-full shadow-lg shadow-purple-500 hover:bg-white text-center ">
              Setting <IoSettingsSharp className="-mt-5 mx-20" />
            </button>
          </span>
        </div>

        <div className="md:border-2 md:border-purple-700  md:m-4 md:p-4   md:h-[550px] md:w-[1150px] md:absolute  md:left-[300px]  ">
          <div className="border-2 border-purple-700  h-[50px] w-[70vw] ">
            <div
        
            >
            {
              toggle ?
              <IoMdClose    onClick={()=>setToggle(!toggle)} className="md:hidden block "
              />
              :
              <GiHamburgerMenu
                onClick={()=>setToggle(!toggle)} className="md:hidden block "  
              />
            }
            </div>
            <ul
              className={`md:flex md:gap-3 md:bg-white fixed sm:bg-purple-500 sm:inline md:left-[350px] ${toggle ? 'left-[6]' : '-left-[100%]'} sm:gap-6  md:w-[60vw]  sm:w-[20vw] `}>
              <li className="w-[11vw]  text-l">
                {" "}
                <input
                  type="date"
                  className="w-[140px] h-8 rounded-full     shadow-lg shadow-purple-500  justify-items-end text-center left-[930px] mt-0 ml-2"
                />
              </li>
              <li className="w-[10vw] text-l h-8 rounded-full     shadow-lg shadow-purple-500  justify-items-end text-center">
                {" "}
                <select name="work shift" id="">
                  <option value="">Department</option>
                  <option value="">Admin</option>
                  <option value="">Employee</option>
                  <option value="">Other</option>
                </select>
              </li>
              <li className="w-[10vw] text-l h-8 rounded-full     shadow-lg shadow-purple-500  justify-items-end text-center">
                <select name="work shift" id="">
                  <option value="">Work Shift</option>
                  <option value="">Day</option>
                  <option value="">Any Time</option>
                  <option value="">Night</option>
                </select>
              </li>
              <li className="w-[10vw] text-l h-8 rounded-full     shadow-lg shadow-purple-500  justify-items-end text-center">
                {" "}
                <select name="Type" id="">
                  <option value="">Type</option>
                  <option value="">Intern</option>
                  <option value="">Employee</option>
                  <option value="">Training</option>
                </select>
              </li>
              <li className="w-[10vw] text-l h-8 rounded-full     shadow-lg shadow-purple-500  justify-items-end text-center">
                {" "}
                <select name="Shedule" id="">
                  <option value="">Shedule</option>
                  <option value="">Entry</option>
                  <option value="">On Time</option>
                  <option value="">Out</option>
                </select>
              </li>
            </ul>
          </div>
          {/* Create user.. */}

          <table className=" md:border-collapse md:border md:border-purple-600 md:mt-6 sm:mt-40 sm:gap-2   ">
            <thead className=" ">
              <tr>
                <th className="border-2 border-purple-600 ">Employee Name</th>
                <th className="border-2 border-purple-600">Punch In</th>
                <th className="border-2 border-purple-600">Punch Out</th>
                <th className="border-2 border-purple-600">Behavior</th>
                <th className="border-2 border-purple-600">Total hour</th>
                <th className="border-2 border-purple-600">Entry</th>
                <th className="border-2 border-purple-600">Email</th>
                <th className="border-2 border-purple-600">Edit</th>
                <th className="border-2 border-purple-600">Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={index}
                  className="border-2 border-purple-600 text-center"
                >
                  <td className="border-2 border-purple-600">Pammy Kumari</td>
                  <td className="border-2 border-purple-600">9:00 AM</td>
                  <td className="border-2 border-purple-600">6:30 PM</td>
                  <td className="border-2 border-purple-600">Good</td>
                  <td className="border-2 border-purple-600">10 hr</td>
                  <td className="border-2 border-purple-600">Morning</td>
                  <td className="border-2 border-purple-600">
                    pammy2018@ismpatna.ac.in
                  </td>
                  <td className="border-2 border-purple-600">
                    <FaEdit className="font-bold text-2xl text-green-600" />
                  </td>
                  <td className="border-2 border-purple-600">
                    <button
                      className="font-bold text-2xl "
                      onClick={() => handleDelete(index)}
                    >
                      <MdDelete className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Daily_Log;
