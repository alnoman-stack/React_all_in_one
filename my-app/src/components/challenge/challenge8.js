import React, { useState } from "react";

import "./challenge8.css";

const Challenge8 = () => {
  const [inc, setInc] = useState(0);

  const Inc = () => {
    console.log("Click");
    setInc(inc + 1);
  };
  const Dec = () => {
    console.log("Click");
    setInc(inc - 1);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{inc}</h1>
          <div className="btn_div">
            <button onClick={Inc}>Increm</button>
            <button onClick={Dec} disabled={if()}>
              Decrem
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenge8;
