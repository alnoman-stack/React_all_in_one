import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

import ListItem from "./ListItem";
import "./todoApp.css";

const TodoApp = () => {
  const [item, setItem] = useState();
  const [newItem, setNewItem] = useState([]);

  const ItemEvent = (event) => {
    setItem(event.target.value);
  };
  const ListOfItems = () => {
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo lsit</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Items"
            value={item}
            onChange={ItemEvent}
          />
          <Button className="newBtn" onClick={ListOfItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newItem.map((curValue, index) => {
              return <ListItem key={index} text={curValue} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
