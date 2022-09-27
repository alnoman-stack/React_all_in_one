import React, { useState } from "react";

import MyThapaAccordion from "./MyThapaAccordion";
import { questions } from "./api";
import "./ThapaAccordion.css";

const ThapaAccordion = () => {
  const [data, setData] = useState(questions);

  return (
    <>
      <section className="main_div">
        <h1>React Interview Questions</h1>
        {data.map((curEle, index) => {
          return <MyThapaAccordion key={curEle.id} {...curEle} />;
        })}
      </section>
    </>
  );
};

export default ThapaAccordion;
