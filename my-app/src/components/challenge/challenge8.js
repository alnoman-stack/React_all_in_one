import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import "./challenge8.css";

const Challenge8 = () => {
  const [inc, setInc] = useState(0);

  const Inc = () => {
    setInc(inc + 1);
  };
  const Dec = () => {
    if (inc > 0) {
      setInc(inc - 1);
    } else {
      alert("Sorry,Zero limit reached");
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{inc}</h1>
          <div className="btn_div">
            <button onClick={Inc}>
              <AddIcon />
            </button>
            <button onClick={Dec}>
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenge8;
