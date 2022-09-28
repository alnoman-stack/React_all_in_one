import React, { useState } from "react";

import "./keepApp.css";
import Header from "./Heading";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Note from "./Note";

const KeepApp = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    alert("I am clicked");

    setAddItem((preVal) => {
      return [...preVal, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currdata, indx) => {
        return indx != id;
      })
    );
  };

  return (
    <>
      <section className="main_div">
        <Header />
        <CreateNote passNote={addNote} />

        {addItem.map((cVal, ind) => {
          return (
            <Note
              title={cVal.title}
              content={cVal.content}
              key={ind}
              id={ind}
              deleteItem={onDelete}
            />
          );
        })}

        <Footer />
      </section>
    </>
  );
};

export default KeepApp;
