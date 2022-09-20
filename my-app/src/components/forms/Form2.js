import React, { useState } from "react";

import "./forms.css";

function Form2() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  const [newfName, setNewfName] = useState("");
  const [newlName, setNewlName] = useState("");

  const EventChang1 = (e) => {
    setfName(e.target.value);
  };

  const EventChang2 = (e) => {
    setlName(e.target.value);
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    setNewfName(fName);
    setNewlName(lName);
  };

  return (
    <>
      <form action="" onSubmit={HandleSubmit}>
        <div>
          <h1>
            Hello {newfName} {newlName}
          </h1>
          <input
            type="text"
            placeholder="Enter Your First Name"
            onChange={EventChang1}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            onChange={EventChang2}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form2;
