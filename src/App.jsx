import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard.jsx";
import Sidebar from "./components/Sidebar";
import Designation from "./components/employee/Designation.jsx";
import Employee_Status from "./components/employee/Employee_Status.jsx";
import Payslips from "./components/payrun/Payslips.jsx";
import Daily_Log from "./components/attendance/Daily_Log.jsx";
import { useState } from "react";
import Badge from "./components/payrun/Badge.jsx";
import All_Employee from "./components/employee/All_Employee.jsx";



function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [option1, setOption] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");

  const data = (option) => {
    setOption(option);
  };
  const data1 = (option) => {
    setOption2(option);
  };
  const data2 = (option) => {
    setOption3(option);
  };

  return (
    <>




      <Sidebar
        sidebarToggle={sidebarToggle}
        data={data}
        data1={data1}
        data2={data2}
      />

      <div className="flex flex-col">
        <Dashboard
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <div className="">
          {option1 == "Designation" ? <Designation /> : ""}
          {option1 == "All Employee" ? <All_Employee /> : ""}
          {option1 == "Employment Status" ? <Employee_Status /> : ""}
        </div>
        <div className="">
          {option2 == "Payslip" ? <Payslips /> : ""}
          {option2 == "Benefitiary badge" ? <Badge /> : ""}
        </div>
        <div>{option3 == "Daily log" ? <Daily_Log /> : ""}</div>
      </div>
      <div>
        <div>
        
        </div>
      </div>
      
      
    </>
  );
}

export default App;
