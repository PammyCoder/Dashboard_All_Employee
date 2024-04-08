import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { RiUserShared2Fill } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import { BsCassetteFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ sidebarToggle, data, data1, data2}) => {
  const [selected, setSelected] = useState("");
   const [payslip, setPayslip] = useState("");
   const [dailylog, setDailyLog] = useState("");
   const [open, setOpen]=useState(false)
   const [toggle, setToggle]=useState(false)


  const handleChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
     
  };
  data(selected);
  
 const handlePayChange=(e)=>{
  console.log(e.target.value);
  setPayslip(e.target.value);
  
 };
 data1(payslip)

 const handleDailyChange=(e)=>{
  setDailyLog(e.target.value);
 };
 data2(dailylog);


  

  return (
 
   
    <div
      className={`   ${
        sidebarToggle ? " hidden " : " block " 
      } w-68   bg-purple-800 fixed  h-[700px]  px-[15px] py-2 ${open} bg-purple-800   sm:${toggle ? 'left-[40]' : '-left-[100%]'}   `}
      
    >
     <div>
      {
              toggle ?
              <IoMdClose    onClick={()=>setToggle(!toggle)} className="md:hidden block  w-10 h-8   "
              />
              :
              <GiHamburgerMenu
                onClick={()=>setToggle(!toggle)} className=" w-10 h-8  md:hidden block "  
              />
      }
      </div> 
     

     
      <h1 className="mt-8 text-center text-white font-bold text-xl">Job Desk</h1>
      <hr />
     
      

       <ul className={`md:mt-3   top-[92px] text-white font-bold   `}>
        <li className="mb-2 rounded hover:shadow hover:bg-white-500 py-2">
          <FaUsers className="inline-block w-6 h-6 mr-2 -mt-2" />

          <select
            name="Employee"
            id=""
            value={selected}
            onChange={(e) => handleChange(e)}
            className="px-3 bg-purple-500"
          >
            <option>Employee</option>
            <option> All Employee</option>
            <option>Designation</option>
            <option>Employment Status</option>
          </select> 

          {/* {selected == "Designation" ? <Designation /> : ""}
          {selected == "Employment Status" ? <Employee_Status /> : ""} */}
         </li>

        <li className="mb-2 rounded hover:shadow hover:bg-white-500 py-2">
          <RiUserShared2Fill className="inline-block w-6 h-6 mr-2 -mt-2" />
          <select name="Leave" id="Leave" className="px-3 bg-purple-500">
            <option value="">Leave</option>
            <option value="">Leave Status</option>
            <option value="">Leave Request </option>
          </select>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-white-500 py-2">
          <FaUserCheck className="inline-block w-6 h-6 mr-2 -mt-2" />
          <select
            name="Attendance"
            id=""
            className="px-3 bg-purple-500"
            value={dailylog}
            onChange={(e) => handleDailyChange(e)}
          >
            <option >Attendance</option>
            <option > Daily log</option>
            <option >Attendance Request</option>
            <option >Summary</option>
          </select>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-white-500 py-2">
          <GiReceiveMoney className="inline-block w-6 h-6 mr-2 -mt-2" />
          <select name="Payrun" id="" className="px-3 bg-purple-500"   value={payslip}
            onChange={(e) => handlePayChange(e)}
 
>
          <option>Payrun</option>
            <option >Payslip</option>
            <option >Benefitiary badge</option>
          </select>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-white-500 py-2">
          <FaUserTie className="inline-block w-6 h-6 mr-2 -mt-2" />
          Administrations
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-white-500 py-2">
          <BsCassetteFill className="inline-block w-6 h-6 mr-2 -mt-2" />
          Assets
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-white-500 py-2">
          <IoSettings className="inline-block w-6 h-6 mr-2 -mt-2" />
          Setting
        </li>
      </ul> 
      </div>
  
    
  );
};

export default Sidebar;
