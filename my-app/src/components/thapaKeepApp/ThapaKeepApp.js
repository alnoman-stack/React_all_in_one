import React, { useState } from "react";

import "./keep.css";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";

const ThapaKeepApp = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    alert("I am clicked");
    setAddItem((preData) => {
      return [...preData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      oldData.filter((currdata, ind) => {
        return ind !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, ind) => {
        return (
          <Note
            key={ind}
            id={ind}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
};

export default ThapaKeepApp;
