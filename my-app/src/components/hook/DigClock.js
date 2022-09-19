import React, { useState } from "react";

import "./inc.css";

const DigClock = () => {
  let time = new Date().toLocaleTimeString();

  const [state, setstate] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setstate(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      <div className="container">
        <div>
          <h1>Hi,Dola Siddika</h1>
          <h1>{state}</h1>
        </div>
      </div>
    </>
  );
};

export default DigClock;
