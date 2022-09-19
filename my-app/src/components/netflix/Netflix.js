import React from "react";

import Card from "./Card";
import Sdata from "./Sdata";

function Netflix() {
  return (
    <>
      <Card
        imgSrc={Sdata[0].imgSrc}
        sname={Sdata[0].sname}
        title={Sdata[0].title}
        link={Sdata[0].link}
        key={Sdata[0].id}
      />
    </>
  );
}

export default Netflix;
