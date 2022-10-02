import React from "react";

import "./accordion.css";
import { questions } from "./Api";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  return (
    <>
      <div className="main_div">
        <h1>React Interview Questions</h1>

        {questions.map((curItem, index) => {
          return <MyAccordion key={index} {...curItem} />;
        })}
      </div>
    </>
  );
};

export default Accordion;
