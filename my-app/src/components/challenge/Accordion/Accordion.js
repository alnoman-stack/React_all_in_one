import React, { useState } from "react";

import "./accordion.css";
import { questions } from "./api";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  const [data, setData] = useState(questions);

  return (
    <>
      <section className="main_div">
        <h1>React Interview Questions</h1>
        {data.map((cValue) => {
          const { id } = cValue;
          return <MyAccordion key={id} {...cValue} />;
        })}
      </section>
    </>
  );
};

export default Accordion;
