import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <p>CopyRight @ al {year}</p>
      </footer>
    </>
  );
};

export default Footer;
