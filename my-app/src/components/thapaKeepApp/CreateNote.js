import React, { useState } from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const eventChange = (event) => {
    const { value, name } = event.target;

    setNote((preData) => {
      return {
        ...preData,
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
      <div className="main_note">
        <form action="">
          <input
            name="title"
            type="text"
            value={note.title}
            onChange={eventChange}
            placeholder="Title"
          />
          <textarea
            name="content"
            id=""
            cols=""
            rows=""
            value={note.content}
            onChange={eventChange}
            placeholder="Write a note..."
          ></textarea>
          <div className="btn_div">
            <Button className="btn" onClick={addEvent}>
              <AddIcon className="addIcon" />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
