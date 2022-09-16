import React from "react";

import "./gretting.css";

function Gretting() {
  const timeNow = new Date(2022, 10, 16, 20).getHours();

  let gretting = "";
  const cssStyle = {};

  if (timeNow >= 1 && timeNow <= 11) {
    gretting = "Good Morning";
    cssStyle.color = "green";
  } else if (timeNow >= 12 && timeNow <= 16) {
    gretting = "Good Afternoon";
    cssStyle.color = "orange";
  } else if (timeNow >= 17 && timeNow <= 19) {
    gretting = "Good Evening";
    cssStyle.color = "tomato";
  } else {
    gretting = "Good Night";
    cssStyle.color = "black";
  }

  return (
    <>
      <div className="container">
        <h1>
          Hello Sir,<span style={cssStyle}>{gretting}</span>
        </h1>
      </div>
    </>
  );
}

export default Gretting;
