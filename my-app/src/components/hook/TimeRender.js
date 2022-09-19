import React, { useState } from "react";

import "./inc.css";

function TimeRender() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  return (
    <>
      <div className="container">
        <div>
          <h1>
            <p>{ctime}</p>
          </h1>
          <button onClick={UpdateTime}>Get Time </button>
        </div>
      </div>
    </>
  );
}

export default TimeRender;
