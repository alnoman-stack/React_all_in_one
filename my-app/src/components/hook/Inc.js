import React, { useState } from "react";

import "./inc.css";

function Inc() {
  const [state, setstate] = useState(0);

  const HandInc = () => {
    setstate(state + 1);
  };

  const HandDec = () => {
    setstate(state - 1);
  };

  return (
    <>
      <div className="container">
        <div>
          <h1>{state}</h1>
          <button onClick={HandInc}>+</button>
          <span style={{ padding: "10px" }}></span>
          <button onClick={HandDec}>-</button>
        </div>
      </div>
    </>
  );
}

export default Inc;
