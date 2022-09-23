import React from "react";

import "./digitalclock.css";
import Clock from "react-digital-clock";

const DigitalClock = () => {
  return (
    <>
      <div className="main_div">
        <h1>
          Hello
          <span>
            <Clock />
          </span>
        </h1>
      </div>
    </>
  );
};

export default DigitalClock;
