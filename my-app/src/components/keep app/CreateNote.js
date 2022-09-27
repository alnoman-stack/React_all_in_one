import React, { useState } from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { value, name } = event.target;

    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="main_node">
        <form action="">
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="1"
            value={note.content}
            name="content"
            onChange={InputEvent}
            placeholder="Write a note..."
          ></textarea>
          <Button onClick={addEvent} className="plus_sign">
            +
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
