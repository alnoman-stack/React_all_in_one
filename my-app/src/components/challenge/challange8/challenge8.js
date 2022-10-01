import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

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
            <Tooltip title="Add">
              <Button onClick={Inc}>
                <AddIcon />
              </Button>
            </Tooltip>

            <Tooltip title="Delete">
              <Button onClick={Dec}>
                <RemoveIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenge8;
