import React, { useState } from "react";
import "./Formlist.css";
const Formlist = () => {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [rating, setRating] = useState("");
  const [Submit, setSubmit] = useState([]);

  const InputName = (name) => {
    setName(name.target.value);
  };
  const InputDept = (dept) => {
    setDept(dept.target.value);
  };
  const InputRating = (rating) => {
    setRating(rating.target.value);
  };
  const submit = () => {
    setSubmit([
      ...Submit,
      ["Name: ", name],
      ["Department: ", dept],
      ["Rating: ", rating],
    ]);
    setName("");
    setDept("");
    setRating("");
  };
  return (
    <>
      <div className="input-section">
        <div className="child-input">
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <p>
            Name:{" "}
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={InputName}
            />
          </p>
          <p>
            Department:{" "}
            <input
              type="text"
              placeholder="Enter Department"
              value={dept}
              onChange={InputDept}
            />
          </p>
          <p>
            Rating:{" "}
            <input
              type="number"
              placeholder="Enter Rating (1 - 10)"
              value={rating}
              onChange={InputRating}
            />
          </p>
        </div>
        <button className="button" type="submit" onClick={submit}>
          Submit
        </button>
      </div>
      <div className="output">
        <ul className="list">
            {Submit.map((info, index) => (
              <li style={{ listStyleType: "none" }}>{info}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Formlist;
