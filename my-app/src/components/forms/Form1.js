import React, { useState } from "react";

import "./forms.css";

export default function Form1() {
  const [name, setName] = useState(" ");
  const [fullName, setFullName] = useState(" ");

  const EventChange = (e) => {
    setName(e.target.value);
  };

  const HandleClick = () => {
    setFullName(name);
  };

  return (
    <>
      <div>
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={EventChange}
          //  value={name}
        />
        <button onClick={HandleClick}>Submit 👍</button>
      </div>
    </>
  );
}
