import React, { useState, useEffect } from "react";

const UseEffectChallange = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `You click me ${num} times`;
  });

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default UseEffectChallange;
