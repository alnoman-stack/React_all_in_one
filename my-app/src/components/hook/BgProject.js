import React, { useState } from "react";

import "./inc.css";

const BgProject = () => {
  let purple = "#8e44ad";

  const [bg, setBg] = useState(purple);
  const [newName, setnewName] = useState("Click Me");

  const BgChange = () => {
    setBg("#34495e");
    setnewName("Ouuch 🌝");
  };

  const Bgback = () => {
    setBg(purple);
    setnewName("Yes 👍");
  };

  return (
    <>
      <div className="container" style={{ backgroundColor: bg }}>
        <div>
          <button onClick={BgChange} onDoubleClick={Bgback}>
            {newName}
          </button>
        </div>
      </div>
    </>
  );
};

export default BgProject;
