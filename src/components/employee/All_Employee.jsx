import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import { Button, Modal } from "react-bootstrap";
const All_Employee = () => {
 ;
 

 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({
    Profile: "",
    Emp_id: "",
    Designation: "",
    Employee_Status: "",
    Department: "",
    Work_Shift: "",
    Joining_Date: "",
    Salary: "",
    Role: "",
    Action: "",
  });

  const [data, setData] = useState([]);
  const handleChange = (event) => {
  
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  let {
    Profile,
    Emp_id,
    Designation,
    Employee_Status,
    Department,
    Work_Shift,
    Joining_Date,
    Salary,
    Role,
    Action,
  } = form;

  const handleAdd = (e) => {  
    setData([
      ...data,
      {
        Profile,
        Emp_id,
        Designation,
        Employee_Status,
        Department,
        Work_Shift,
        Joining_Date,
        Salary,
        Role,
        Action,
      },
    ]);
    setForm({
      Profile: "",
      Emp_id: "",
      Designation: "",
      Employee_Status: "",
      Department: "",
      Work_Shift: "",
      Joining_Date: "",
      Salary: "",
      Role: "",
      Action: "",
    });
  };

  return (
    <>
      <div className="  ml-40 -mt-4">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded w-[1100px] ml-[200px] ">
          <div class="row ">
            <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Student"
                    aria-label="Search"
                  />
                </form>
              </div>
            </div>
            <div
              className="col-sm-3 offset-sm-2 -mt-2 mb-4 text-gred"
             
            >
              <h2 className="font-bold underline text-purple-600">
                All Employee
              </h2>
            </div>
            <div className="col-sm-2 offset-sm-1  mt-5 mb-4 shadow-lg rounded-full ">
              <Button variant="light " className="fs-5 "    onClick={handleShow}>
                Add Employee
              </Button>
            </div>
          </div>
         

          <table className="table">
        <thead>
          <tr>
            <th scope="col">Profile</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Desgination</th>
            <th scope="col">Employee Status</th>
            <th scope="col">Department</th>
            <th scope="col">Work Shift</th>
            <th scope="col">Joining Date</th>
            <th scope="col">Salary</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => {
            return (
              <tr>
                <td>{data.Profile}</td>
                <td>{data.Emp_id}</td>
                <td>{data.Designation}</td>
                <td>{data.Employee_Status}</td>
                <td>{data.Department}</td>
                <td>{data.Work_Shift}</td>
                <td>{data.Joining_Date}</td>
                <td>{data.Salary}</td>
                <td>{data.Role}</td>
                <td>{data.Action}</td>
              </tr>
            );
          })}
        </tbody>
      </table>


          {/* <!--- Model Box ---> */}
          <div className="model_box">
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add Record</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form className="">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Profile
        </span>
        <input
          type="file"
          className="form-control"
          name="Profile"
          value={form.Profile}
          placeholder="Enter Your Porfile"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
        

      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Employee_ID
        </span>
        <input
          type="text"
          className="form-control"
          name="Emp_id"
          value={form.Emp_id}
          placeholder="Enter Your Employee ID"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Designation
        </span>
        <input
          type="text"
          className="form-control"
          name="Designation"
          value={form.Designation}
          placeholder="Enter Your Designation"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Employee_Status
        </span>
        <input
          type="text"
          className="form-control"
          name="Employee_Status"
          value={form.Employee_Status}
          placeholder="Enter Your Employee Status"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Department
        </span>
        <input
          type="text"
          className="form-control"
          name="Department"
          value={form.Department}
          placeholder="Enter Your Department"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Work_Shift
        </span>
        <input
          type="text"
          className="form-control"
          name="Work_Shift"
          value={form.Work_Shift}
          placeholder="Enter Your Work Shift"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Joining_Date
        </span>
        <input
          type="date"
          className="form-control"
          name="Joining_Date"
          value={form.Joining_Date}
          placeholder="Enter Your Joining Date"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Salary
        </span>
        <input
          type="number"
          className="form-control"
          name="Salary"
          value={form.Salary}
          placeholder="Enter Your Salary"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Role
        </span>
        <input
          type="text"
          className="form-control"
          name="Role"
          value={form.Role}
          placeholder="Enter Your Role"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Action
        </span>
        <input
          type="text"
          className="form-control"
          name="Action"
          value={form.Action}
          placeholder="Enter Your Action"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={() => handleAdd()} className="btn btn-success">
        Add
      </button>
    </form>
        
              
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Model Box Finsihs */}
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default All_Employee;
