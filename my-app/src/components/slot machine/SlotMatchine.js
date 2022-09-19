import React from "react";

import "./slotm.css";
import SlotM from "./SlotM";

function SlotMatchine() {
  return (
    <>
      <div className="container">
        <h1 className="heading_style">
          🎰 Welcome to
          <span style={{ fontWeight: "bolder" }}> Slot machine</span> game 🎰
        </h1>
        <div className="card">
          <SlotM x={"😄"} y={"😄"} z={"😄"} />
          <SlotM x={"👨"} y={"🍎"} z={"👨"} />
          <SlotM x={"🍎"} y={"🍎"} z={"🍎"} />
        </div>
      </div>
    </>
  );
}

export default SlotMatchine;
