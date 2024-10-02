import React, { useState } from "react";
import "./Formlist.css";
import DataOut from "./DataOut";
const Formlist = () => {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [rating, setRating] = useState("");
  const [Submit, setSubmit] = useState([]);
  const [Click, setClick] = useState(true);

  
  const HandleChange = (event) => {
    const {name,value,dept} = event.target
    if (name === "name") {
      setName(value);
    } else if (name === "dept") {
      setDept(value);
    } else if (name === "rating") {
      setRating(value);
    }
  };
  const submit = () => {
    const obj = {
      name: name,
      dept: dept,
      rating: rating,
    };
    setSubmit([...Submit, obj]);
    setName("");
    setDept("");
    setRating("");
    setClick(false);
  };
  const ClickChange = () =>{
    setClick(!Click);
  };
  return (
    <>
    {Click ? 
      <div className="input-section">
        <div className="child-input">
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <p>
            Name:{" "}
            <input
              name="name"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={HandleChange}
            />
          </p>
          <p>
            Department:{" "}
            <input
              name="dept"
              type="text"
              placeholder="Enter Department"
              value={dept}
              onChange={HandleChange}
            />
          </p>
          <p>
            Rating:{" "}
            <input
              name="rating"
              type="number"
              placeholder="Enter Rating (1 - 10)"
              value={rating}
              onChange={HandleChange}
            />
          </p>
        </div>
        <button className="button" type="submit" onClick={submit}>
          Submit
        </button>
      </div>
      :
      <div>
        <DataOut ClickChange = {ClickChange} Submit = {Submit} />
      </div>
}
    </>
  );
};

export default Formlist;
