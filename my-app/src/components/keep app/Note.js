import React from "react";

import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="note">
        <h4>{props.title}</h4>
        <br />
        <p>{props.content}</p>
        <Button onClick={deleteNote}>
          <DeleteOutlineIcon className="deleteIcon" />
        </Button>
      </div>
    </>
  );
};

export default Note;
