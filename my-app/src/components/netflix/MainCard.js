import React from "react";

import Amazon from "./Amazon";
import Netflix from "./Netflix";

const favS = "netflix";

function MainCard() {
  return (
    <>
      <h1>Top five netflix series</h1>
      {/* {<FavSer />} */}
      {favS === "netflix" ? <Netflix /> : <Amazon />}
    </>
  );
}

export default MainCard;
