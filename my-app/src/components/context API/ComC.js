import React from "react";

import { fName, lName } from "../../App";

export default function ComC() {
  return (
    <>
      <fName.Consumer>
        {(fnam) => {
          return (
            <lName.Consumer>
              {(lnam) => {
                return (
                  <h1 style={{ textTransform: "capitalize" }}>
                    my name is {fnam} {lnam}
                  </h1>
                );
              }}
            </lName.Consumer>
          );
        }}
      </fName.Consumer>
    </>
  );
}
