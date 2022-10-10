import React, { createContext } from "react";
import ComA from "./components/context API/ComA";

const fName = createContext();
const lName = createContext();

const App = () => {
  console.log(fName);
  return (
    <>
      <fName.Provider value={"Al Noman"}>
        <lName.Provider value={"Hawlader"}>
          <ComA />
        </lName.Provider>
      </fName.Provider>
    </>
  );
};

export default App;
export { fName, lName };
