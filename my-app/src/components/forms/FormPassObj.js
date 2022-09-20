import React, { useState } from "react";

import "./forms.css";

const FormPassObj = () => {
  const [fullName, setFullName] = useState({ fname: "", lname: "" });

  const EventChange = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  };

  const EventSubmit = (event) => {
    event.preventDefault();
    alert("Form is submited");
  };

  return (
    <>
      <form action="" onSubmit={EventSubmit}>
        <div>
          <h1>
            Hello {fullName.fname} {fullName.lname}
          </h1>
          <input
            type="text"
            placeholder="Enter Your First Name"
            name="fName"
            onChange={EventChange}
            value={fullName.fname}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            name="lName"
            onChange={EventChange}
            value={fullName.lname}
          />
          <button type="submit">Submit 👍</button>
        </div>
      </form>
    </>
  );
};

export default FormPassObj;
