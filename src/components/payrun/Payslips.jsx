import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";


const Payslips = () => {
  // const [selected, setSelected]=useState();
  return (
    <>
      <div className="md:w-full sm:w-64  md:h-screen sm:h-10 md:pl-[85%] md:overflow-hideen sm:overflow-hidden  ">
        <div className="w-[250px] h-1  pl-2  -mx-[600px] justify-between text-center   ">
          <h1 className=" font-bold text-2xl underline text-purple-800">
            Payslips
          </h1>
        </div>
        <div className="flex  ">
          <span className=" flex mr-2  pr-30  h-8   ">
            <button  className="mr-2 pr-30 bg-purple-500 w-[100px] relative right-[290px] rounded-full shadow-lg shadow-purple-500 hover:bg-white ">
              Export All
            </button>
          </span>

          <span className=" flex mr-2 pr-30   h-8  ">
            <button className="mr-2 pr-30 bg-purple-500 w-[180px] relative right-[290px] rounded-full shadow-lg shadow-purple-500 hover:bg-white ">send filtered payslips</button>
          </span>

          <span className="flex mr-2 pr-35  h-8">
            <button className="mr-2 pr-30 bg-purple-500 w-[190px] relative right-[290px] rounded-full shadow-lg shadow-purple-500 hover:bg-white ">Send monthly payslip</button>
          </span>
        </div>
        <div className="border-2 border-purple-700  m-4 p-4   h-[550px] w-[1150px] absolute  left-[300px] ">
        <div className="border-2 border-purple-700   h-[30px] w-[70vw] "><ul className="flex "><li className="w-[5vw] text-l">Created</li>
        <li className="w-[5vw] text-l">Status</li>
        <li className="w-[6vw] text-l">Department</li>
        <li className="w-[5vw] text-l">Type</li>
        <li className="w-[8vw] text-l">Payrun Period</li>
        <li className="w-[8vw] text-l">Show Conflicted</li></ul></div>
          {/* Create user.. */}
          <input type="month" className="w-[150px] h-8 rounded-full   bg-purple-500  shadow-lg shadow-purple-500  justify-items-end text-center left-[930px] mt-2"/>
            

          <table className="table-fixed border-collapse border border-purple-600 mt-4">
  <thead>
    <tr>
      <th className="border-2 border-purple-600">Profile</th>
      <th className="border-2 border-purple-600">Payrun</th>
      <th className="border-2 border-purple-600">Payrun Period</th>
      <th className="border-2 border-purple-600">Payrun type</th>
      <th className="border-2 border-purple-600">Status</th>
      <th className="border-2 border-purple-600">Salary</th>
      <th className="border-2 border-purple-600">Net Salary</th>
      <th className="border-2 border-purple-600" >Details</th>
      <th className="border-2 border-purple-600">Email</th>
      <th className="border-2 border-purple-600">Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-2 border-purple-600 text-center">
      <td className="border-2 border-purple-600">Rida Rihana(BD)</td>
      <td className="border-2 border-purple-600">1-30 Apr(ID-E3467)</td>
      <td className="border-2 border-purple-600">monthly</td>
      <td className="border-2 border-purple-600">Default</td>
      <td className="border-2 border-purple-600">Generated</td>
      <td className="border-2 border-purple-600"> 50000</td>
      <td className="border-2 border-purple-600">50800</td>
      <td className="border-2 border-purple-600">view details</td>
      <td className="border-2 border-purple-600">send</td>
      <td className="border-2 border-purple-600"><FaEdit /></td>
    </tr>

    
   
   
  </tbody>
</table>
         
        </div>
      </div>
    </>
  );
};

export default Payslips;
