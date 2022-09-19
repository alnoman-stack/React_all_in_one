import React from "react";

import Card from "./Card";
import Sdata from "./Sdata";

function Amazon() {
  return (
    <>
      <Card
        imgSrc={Sdata[1].imgSrc}
        sname={Sdata[1].sname}
        title={Sdata[1].title}
        link={Sdata[1].link}
        key={Sdata[1].id}
      />
    </>
  );
}

export default Amazon;
