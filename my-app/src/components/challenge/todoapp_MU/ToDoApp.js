import React, { useState } from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./todoapp.css";
import ToDoList from "./ToDoList";

const TodoApp = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const EventChange = (event) => {
    setItem(event.target.value);
  };

  const HandleClick = () => {
    setNewItem((oldItem) => {
      return [...oldItem, item];
    });
    setItem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo App</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Item..."
            value={item}
            onChange={EventChange}
          />
          <Button className="newBtn" onClick={HandleClick}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newItem.map((val, ind) => {
              return <ToDoList key={ind} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
