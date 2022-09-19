import React, { useState } from "react";

import "./forms.css";

const Form1 = () => {
  const [name, setName] = useState(" ");
  const [fullName, setFullName] = useState();

  const HandleChange = (e) => {
    console.log(e.target.value);
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
          onChange={HandleChange}
          value={name}
        />
        <button type="submit" onClick={HandleClick}>
          Click Me 👍
        </button>
      </div>
    </>
  );
};

export default Form1;
