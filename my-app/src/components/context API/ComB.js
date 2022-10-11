import React, { useContext } from "react";

import { fName, lName } from "../../App";

export default function ComB() {
  const FirstName = useContext(fName);
  const LastName = useContext(lName);

  return (
    <>
      <h1>
        My name is {FirstName} {LastName}
      </h1>
    </>
  );
}
