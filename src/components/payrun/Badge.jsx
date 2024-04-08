import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import classNames from 'classnames'


const Badge = () => {
  const [items, setItems] = useState([]);
  const [toggle, setToggle] =useState(false)
const [isSelected, setIsSelected]=useState(true);
const [isSelected1, setIsSelected1]=useState(true);
  

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
            Benefitiary badge
          </h1>
        </div>
        
        <div className=" mt-1  mx-[200px] w-[250px]  ">
          <span className="flex mr-2 pr-35  h-8">
            <button className="mr-2 pr-30 bg-purple-500 w-[130px] relative right-[110px] rounded-full shadow-lg shadow-purple-500 hover:bg-white "  onClick={handleAdd}>
             Add Badge
            </button>
          </span>
        </div>
  
        <div className="md:border-2 md:border-purple-700  md:m-4 md:p-4   md:h-[550px] md:w-[1150px] md:absolute  md:left-[300px] sm:w-full ">
          <div className="border-2 border-purple-700  h-[50px] w-[70vw] ">
          <div >
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
            <ul  className={`md:flex md:gap-3 md:bg-white fixed sm:bg-purple-500 sm:inline md:left-[350px] ${toggle ? 'left-[6]' : '-left-[100%]'} sm:gap-6  md:w-[60vw]  sm:w-[20vw] `}>
             
              <li className="w-[10vw] text-l h-8 rounded-full     shadow-lg shadow-purple-500 ml-2 justify-items-end text-center font-bold">Created</li>
              <li className="w-[10vw] text-l h-8 rounded-full     shadow-lg shadow-purple-500   justify-items-end text-center font-bold">Type
              </li>
              <li className="w-[10vw] text-l h-8 rounded-full     shadow-lg shadow-purple-500  justify-items-end text-center font-bold"> Status</li>
             
            </ul>
          </div>
          {/* Create user.. */}

          <table className=" md:border-collapse md:border md:border-purple-600 md:mt-6 sm:mt-40 sm:gap-2   ">
            <thead className=" ">
              <tr>
                <th className="border-2 border-purple-600 ">Name</th>
                <th className="border-2 border-purple-600">Description</th>
                <th className="border-2 border-purple-600">Type</th>
                <th className="border-2 border-purple-600">Behavior</th>
                <th className="border-2 border-purple-600">Status</th>
                <th className="border-2 border-purple-600">Created</th>
                <th className="border-2 border-purple-600">Edit</th>
                <th className="border-2 border-purple-600">Delete</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
                   
              <tr key={index} className="border-2 border-purple-600 text-center">
                <td className="border-2 border-purple-600">Tax</td>
                <td className="border-2 border-purple-600"></td>
                <td className="border-2 border-purple-600">Deduction</td>
                <td className="border-2 border-purple-600"><div onClick={()=>setIsSelected(!isSelected)} className={classNames('flex w-[40px] border-2 border-black h-[20px]  m-5 rounded-full transition-all duration-500 ',
                {
                  'bg-green-500':isSelected,
                  'bg-slate-500':!isSelected
                } )}><span className={classNames('h-4 w-4 border-2 border-black bg-white rounded-full transition-all duration-500 shadow-lg', {
                  'ml-5':isSelected,
                  
                })}></span></div></td>
                <td className="border-2 border-purple-600"></td>
                <td className="border-2 border-purple-600"></td>
                <td className="border-2 border-purple-600">
                  <FaEdit className="font-bold text-2xl text-green-600"/>
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
              {items.map((item, index) => (
              <tr key={index} className="border-2 border-purple-600 text-center">
                <td className="border-2 border-purple-600">Bonus</td>
                <td className="border-2 border-purple-600"></td>
                <td className="border-2 border-purple-600">Allowance</td>
                <td className="border-2 border-purple-600"><div onClick={()=>setIsSelected1(!isSelected1)} className={classNames('flex w-[40px] border-2 border-black h-[20px]  m-5 rounded-full transition-all duration-500 ',
                {
                  'bg-green-500':isSelected1,
                  'bg-slate-500':!isSelected1
                } )}><span className={classNames('h-4 w-4 border-2 border-black bg-white rounded-full transition-all duration-500 shadow-lg', {
                  'ml-5':isSelected1,
                  
                })}></span></div></td>
                <td className="border-2 border-purple-600"></td>
                <td className="border-2 border-purple-600"></td>
                <td className="border-2 border-purple-600">
                  <FaEdit className="font-bold text-2xl text-green-600"/>
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

export default Badge;
