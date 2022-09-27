import React, { useState } from "react";

const MyThapaAccordion = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="main_heading">
        <p onClick={() => setShow(!show)}>{show ? "➖" : "➕"}</p>
        <h3>{props.question}</h3>
      </div>
      {show && <p className="answers">{props.answer}</p>}
    </>
  );
};

export default MyThapaAccordion;
