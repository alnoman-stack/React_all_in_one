import React, { useState } from "react";

import "./forms.css";

const Form4 = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const EventChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const { value, name } = event.target;

    setFullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };

      // if (name === "fName") {
      //   return {
      //     fnaem: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fnaem: preValue.fnaem,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fnaem: preValue.fnaem,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fnaem: preValue.fnaem,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // }
    });
  };

  const EventSubmt = (e) => {
    e.preventDefault();
    alert("Form is submited");
  };

  return (
    <>
      <form action="" onSubmit={EventSubmt}>
        <div>
          <h1>
            Hello {fullName.fname} {fullName.lname}
          </h1>
          <h3 className="form4">{fullName.email}</h3>
          <h3 className="form4">{fullName.phone}</h3>
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={EventChange}
            name="fname"
            value={fullName.fname}
          />
          <br />

          <input
            type="text"
            placeholder="Enter First Name"
            onChange={EventChange}
            name="lname"
            value={fullName.lname}
          />
          <br />

          <input
            type="email"
            placeholder="Enter Email"
            onChange={EventChange}
            name="email"
            value={fullName.email}
            autoComplete="off"
          />
          <br />

          <input
            type="number"
            placeholder="Enter Phone"
            onChange={EventChange}
            name="phone"
            value={fullName.phone}
          />
          <button type="submit">Submit 👍</button>
        </div>
      </form>
    </>
  );
};

export default Form4;
